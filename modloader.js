// modloader.js
(async function loadBnacMods() {
  console.log('[BNAC Loader] Starting mod loader…');

  const modsFolder = 'mods/';
  const appRegistry = (window.Apps ||= {});
  console.log('[BNAC Loader] Using mods folder:', modsFolder);

  // Wait until DOM is ready
  const ready = () =>
    new Promise((res) => {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        console.log('[BNAC Loader] DOM already ready.');
        return res();
      }
      console.log('[BNAC Loader] Waiting for DOMContentLoaded…');
      document.addEventListener('DOMContentLoaded', () => {
        console.log('[BNAC Loader] DOMContentLoaded fired.');
        res();
      }, { once: true });
    });
  await ready();

  // Look for .menu-items inside #start-menu
  console.log('[BNAC Loader] Looking for #start-menu .menu-items…');
  const startMenu = document.querySelector('#start-menu .menu-items');
  if (!startMenu) {
    console.error('[BNAC Loader] Could not find .menu-items inside #start-menu.');
    return;
  }
  console.log('[BNAC Loader] Found Start Menu container.');

  // —————————————————————————————————————————————
  // Utilities
  // —————————————————————————————————————————————

  function cleanBase64(s) {
    console.log('[BNAC Loader] Cleaning base64 string…');
    if (!s) {
      console.warn('[BNAC Loader] cleanBase64 called with empty string.');
      return '';
    }
    s = s.replace(/^\uFEFF/, ''); // strip BOM
    s = s.replace(/\s+/g, ''); // strip whitespace/newlines
    console.log('[BNAC Loader] Base64 cleaned, length:', s.length);
    return s;
  }

  function decodeBase64Strict(str, fileName) {
    console.log(`[BNAC Loader] Decoding base64 for ${fileName}…`);
    try {
      const decoded = atob(str);
      console.log(`[BNAC Loader] Successfully decoded ${fileName}, length:`, decoded.length);
      return decoded;
    } catch (e) {
      console.error(`[BNAC Loader] Base64 decode failed for ${fileName}.`, e);
      return null;
    }
  }

  function extractAppDefinition(base64, fileName) {
    console.log(`[BNAC Loader] Extracting app definition from ${fileName}…`);
    const cleaned = cleanBase64(base64);
    const decoded = decodeBase64Strict(cleaned, fileName);
    if (decoded == null) {
      console.warn(`[BNAC Loader] Skipping ${fileName} due to decode failure.`);
      return null;
    }

    // Show decoded code in a collapsible group
    if (console.groupCollapsed) {
      console.groupCollapsed(`[BNAC Loader] ▼ Decoded code from ${fileName}`);
      console.log(decoded);
      console.groupEnd();
    } else {
      console.log(`[BNAC Loader] Decoded code from ${fileName} (array fallback):`, decoded.split('\n'));
    }

    const match = decoded.match(/app\.bnacJS-BNAOS-application\s*\(\s*([\s\S]*?)\s*\)\s*$/);
    if (!match) {
      console.error(`[BNAC Loader] ${fileName} must be wrapped in app.bnacJS-BNAOS-application({})`);
      return null;
    }

    const inner = match[1].trim();
    if (!/^\{[\s\S]*\}$/.test(inner)) {
      console.error(`[BNAC Loader] ${fileName} wrapper found, but payload is not a single object literal.`);
      return null;
    }

    console.log(`[BNAC Loader] Extracted app object code from ${fileName}, length:`, inner.length);
    return inner;
  }

  function uniqueKeyFromTitle(title) {
    console.log('[BNAC Loader] Generating unique key for title:', title);
    const base = (title || 'mod_app').toLowerCase().replace(/\s+/g, '_').replace(/[^\w\-]+/g, '');
    let key = base || 'mod_app';
    let i = 2;
    while (Object.prototype.hasOwnProperty.call(appRegistry, key)) {
      console.warn(`[BNAC Loader] Key collision for "${key}", trying next…`);
      key = `${base}_${i++}`;
    }
    console.log('[BNAC Loader] Generated key:', key);
    return key;
  }

  function injectStartMenuButton(appKey, appObj) {
    console.log(`[BNAC Loader] Injecting Start Menu button for ${appKey}…`);
    const btn = document.createElement('button');
    btn.setAttribute('data-launch', appKey);
    btn.setAttribute('title', appObj.description || `Launch ${appObj.title || appKey}`);
    btn.textContent = appObj.title || appKey;
    startMenu.appendChild(btn);

    // Verify it was actually added
    const found = startMenu.querySelector(`button[data-launch="${appKey}"]`);
    if (found) {
      console.log(`[BNAC Loader] ✅ Button for "${appKey}" successfully added to Start Menu.`);
    } else {
      console.warn(`[BNAC Loader] ⚠️ Tried to add button for "${appKey}", but it was not found in Start Menu.`);
    }
  }

  function injectApp(appCode, fileName) {
    console.log(`[BNAC Loader] Injecting app from ${fileName}…`);
    if (!appCode || typeof appCode !== 'string') {
      console.error(`[BNAC Loader] ${fileName} produced invalid app code.`);
      return;
    }

    let appObj;
    try {
      appObj = (0, eval)('(' + appCode + ')');
      console.log(`[BNAC Loader] Evaluated app object from ${fileName}.`);
    } catch (e) {
      console.error(`[BNAC Loader] Failed to evaluate app object from ${fileName}.`, e);
      console.debug('[BNAC Loader] Offending code preview:', appCode.slice(0, 200));
      return;
    }

    if (typeof appObj !== 'object' || appObj == null) {
      console.error(`[BNAC Loader] ${fileName} did not evaluate to an object.`);
      return;
    }

    const appKey = uniqueKeyFromTitle(appObj.title);
    appRegistry[appKey] = appObj;
    console.log(`[BNAC Loader] Registered app "${appObj.title}" under key "${appKey}".`);

    try {
      injectStartMenuButton(appKey, appObj);
    } catch (e) {
      console.error(`[BNAC Loader] Failed to inject Start Menu button for ${fileName}.`, e);
    }

    console.log(`[BNAC Loader] Finished loading mod: ${appObj.title || appKey} from ${fileName}`);
  }

  // —————————————————————————————————————————————
  // Discovery: list .bnac in /mods
  // —————————————————————————————————————————————

  async function getBnacFiles() {
    console.log('[BNAC Loader] Fetching list of .bnac files from mods folder…');
    try {
      const listing = await fetch(modsFolder, { cache: 'no-store' }).then((r) => r.text());
      console.log('[BNAC Loader] Got directory listing, length:', listing.length);
      const matches = [...listing.matchAll(/href="([^"]+\.bnac)"/gi)];
      console.log('[BNAC Loader] Found .bnac matches:', matches.map(m => m[1]));
      return matches.map((m) => m[1].replace(/^\.?\//, ''));
    } catch (e) {
      console.warn('[BNAC Loader] Could not list mods folder. Provide mods/manifest.json instead.', e);
      return [];
    }
  }

  // —————————————————————————————————————————————
  // Load and inject
  // —————————————————————————————————————————————

  console.log('[BNAC Loader] Beginning load cycle…');
  const bnacFiles = await getBnacFiles();
  console.log('[BNAC Loader] Files to load:', bnacFiles);

    for (const file of bnacFiles) {
      const url = modsFolder + file;
      console.log(`[BNAC Loader] Loading file ${file} from ${url}…`);
    
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
          console.error(`[BNAC Loader] HTTP error ${response.status} for ${file}`);
          throw new Error(`HTTP ${response.status}`);
        }
    
        console.log(`[BNAC Loader] Successfully fetched ${file}.`);
        const content = await response.text();
    
        console.log(`[BNAC Loader] Extracting code from ${file}…`);
        const appCode = extractAppDefinition(content, file);
    
        if (appCode) {
          console.log(`[BNAC Loader] Injecting app from ${file}…`);
          injectApp(appCode, file);
        } else {
          console.warn(`[BNAC Loader] Skipped ${file} due to invalid wrapper or code.`);
        }
    
      } catch (e) {
        console.error(`[BNAC Loader] Error loading ${file}:`, e);
      }
    }

  console.log('[BNAC Loader] Done loading all mods.');
})();