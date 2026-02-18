// =====================
// Apps registry
// =====================
const Apps = {
  notepad: {
    title: 'Notepad',
    content: () => `
      <ul class="menu horizontal" role="menubar">
        <li role="menuitem" tabindex="0">
          File
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="new">New</li>
            <li role="menuitem" data-action="open">Open…</li>
            <li role="menuitem" data-action="save">Save</li>
            <li role="menuitem" data-action="exit">Exit</li>
          </ul>
        </li>
        <li role="menuitem" tabindex="0">
          Edit
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="undo">Undo</li>
            <li role="menuitem" data-action="cut">Cut</li>
            <li role="menuitem" data-action="copy">Copy</li>
            <li role="menuitem" data-action="paste">Paste</li>
          </ul>
        </li>
        <li role="menuitem" tabindex="0">
          Help
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="about">About Notepad</li>
          </ul>
        </li>
      </ul>
      <div class="field-row-stacked" style="height:100%;">
        <textarea id="note" rows="12" style="width:100%; height:100%;"></textarea>
      </div>
    `,
    width: 500,
    height: 400
  },

  about: {
    title: 'About BNAOS',
    content: () => `
      <div class="field-row-stacked" style="text-align:center;">
        <h3>What <i>is</i> BNAOS?</h3>
        <p>BNAOS is a desktop environment developed to emulate Windows binaries in the browser.</p>
        <p>It supports up to 10-core usage for emulation and fully simulates the Windows UI.</p>
        <h3>Version</h3>
        <p>(emulated) Microsoft Windows 7 SP2</p>
        <p>(simulated) BNAOS Version Release 5.2.72 Iteration 1 (Aero Glass)</p>
      </div>
    `,
    width: 300,
    height: 200
  },

properties: { title: 'Desktop Properties', content: () => ` <div class="field-row-stacked"> <label>Wallpaper:</label> <select id="wallpaper-select"> <option value="default" class="options">Default</option> <option value="harmony" class="options">Harmony</option> <option value="mountains" class="options">Mountains</option> <option value="solid" class="options">Solid Color</option> </select> </div> <div class="field-row-stacked"> <label>Theme:</label> <select id="theme-select"> <option value="7">Windows 7 (7.css)</option> <option value="classic">Classic (98.css)</option> <option value="light">Light</option> <option value="dark">Dark</option> </select> </div> <div class="field-row" style="margin-top:1em; justify-content:flex-end;"> <button class="button primary" id="apply-properties">Apply</button> <button class="button">Cancel</button> </div> `, width: 350, height: 220 },
chrome: {
  title: 'Google Chrome',
  content: () => `
<!-- Material UI & Icons CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mui/material@5.15.14/dist/material.min.css">
<script src="https://cdn.jsdelivr.net/npm/@mui/material@5.15.14/umd/material-ui.production.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<style>
  .chrome-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fafafa;
    font-family: "Roboto", "Segoe UI", sans-serif;
    overflow: hidden;
  }

  .chrome-topbar {
    display: flex;
    align-items: center;
    background: #e0e0e0;
    height: 36px;
    padding: 0 8px;
    box-shadow: inset 0 -1px #ccc;
  }

  .chrome-tabs {
    display: flex;
    align-items: center;
    flex: 1;
    overflow-x: auto;
  }

  .tab {
    background: #f5f5f5;
    border-radius: 6px 6px 0 0;
    padding: 4px 12px;
    margin-right: 6px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .tab.active {
    background: #ffffff;
    border: 1px solid #ccc;
    border-bottom: none;
  }

  .tab .tab-close {
    margin-left: 6px;
    border: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
  }

  .chrome-toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f9f9f9;
    padding: 6px 10px;
    border-bottom: 1px solid #ccc;
  }

  .nav-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 18px;
    color: #555;
  }

  .nav-btn:hover {
    color: #000;
  }

  .address-bar {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 14px;
    outline: none;
  }

  .chrome-content {
    flex: 1;
    background: white;
    overflow: hidden;
  }

  #browserFrame {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<div class="chrome-window">
  <!-- Tabs -->
  <div class="chrome-topbar">
    <div class="chrome-tabs" id="chromeTabs">
      <div class="tab active">
        <span class="tab-title" draggable="false">New Tab</span>
        <button class="tab-close">×</button>
      </div>
      <div class="tab new-tab" id="newTab">+</div>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="chrome-toolbar">
    <button class="nav-btn" onclick="goBack()"><span class="material-icons">arrow_back</span></button>
    <button class="nav-btn" onclick="goForward()"><span class="material-icons">arrow_forward</span></button>
    <button class="nav-btn" onclick="reloadPage()"><span class="material-icons">refresh</span></button>
    <input type="text" class="address-bar" id="urlInput" draggable="false" style="-webkit-user-drag: none; /* For WebKit browsers */
  user-drag: none; /* Standard property, limited support */
  -webkit-user-select: none; /* Prevent text selection within the element */
  -moz-user-select: none; /* For Firefox */
  -ms-user-select: none; /* For older Edge/IE */" value="https://www.google.com/" placeholder="Enter a URL...">
    <button class="nav-btn" onclick="navigate()"><span class="material-icons">arrow_right_alt</span></button>
    <button class="nav-btn"><span class="material-icons">star_border</span></button>
  </div>

  <!-- Web content -->
  <div class="chrome-content">
    <iframe id="browserFrame" src="https://goog2010.neocities.org/web" frameborder="0"></iframe>
  </div>
</div>

<script>
  const iframe = document.getElementById('browserFrame');
  const urlInput = document.getElementById('urlInput');

  function safeUrl(u) {
    if (!/^https?:\/\\//i.test(u)) return 'https://' + u;
    return u;
  }

  function navigate() {
    const url = safeUrl(urlInput.value.trim());
    iframe.src = url;
  }

  function goBack() {
    try { iframe.contentWindow.history.back(); } catch {}
  }

  function goForward() {
    try { iframe.contentWindow.history.forward(); } catch {}
  }

  function reloadPage() {
    document.getElementById('iframeid').src += '';
  }
  btn.onclick = reload;

  // Tab creation (visual only)
  const tabBar = document.getElementById('chromeTabs');
  document.getElementById('newTab').addEventListener('click', () => {
    const newTab = document.createElement('div');
    newTab.classList.add('tab', 'active');
    newTab.innerHTML = '<span class="tab-title">New Tab</span><button class="tab-close">×</button>';
    tabBar.insertBefore(newTab, document.getElementById('newTab'));
    setActiveTab(newTab);
  });

  function setActiveTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }

  tabBar.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    if (e.target.classList.contains('tab-close')) {
      tab.remove();
      return;
    }
    setActiveTab(tab);
  });
</script>
`,
  width: 900,
  height: 600
},
welcome: {
  title: 'Welcome!',
  content: () => `
    <div class="window-body" style="text-align:center; padding:1em;">
      <h2>Welcome to BNAOS!</h2>
      <p>In this operating system, you can multitask like the top banana!</p>
      <p>To continue with the tutorial, click "Continue". To exit, click the red "X" in the title bar.</p>
      <button class="button primary" onclick="
  const win = this.closest('.window');
  const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
  if (id) closeWindow(id);
  openApp('tutorial');
">Continue</button>
    </div>
  `,
  width: 300,
  height: 180,
  className: 'no-controls'
},
tutorial: {
  title: 'Getting Started',
  content: () => `
    <div class="window-body" style="padding:1em;">
      <h3>Welcome to BNAOS</h3>
      <p>Here’s how to get started:</p>
      <ol>
        <li>Right-click anywhere on the desktop to open the context menu.</li>
        <li>Click the Start button to explore installed apps.</li>
        <li>Open "Desktop Properties" to change your wallpaper and theme.</li>
        <li>Try launching Notepad and typing something!</li>
        <li>Use the taskbar to switch between open windows.</li>
      </ol>
      <p>But in order to utilize this desktop, you must adhere to the following:</p>
      <h3><br>Legal Matter & Copyright</h3>
      <p>The Five A's | Copyright of BNA, Co. 2025:</p>
      <ol>
        <li>All content served on the backend is copyright of BoxedWine/Microsoft. (Windows 7's ISO file is served through x86Box via BoxedWine)</li>
        <li>All applications are mine except for the following: Notepad, BNAium Browser (half mine, half Google's), MS Paint, and WebAmp.</li>
        <li>Any distribution of this product without a license CAN and WILL result in legal action.</li>
        <li>Actions to replicate this operating system or it's backend using MY servers or MY backends must contain credits of me, unless you have a valid license for the imagery or server script usage.</li>
        <li>All customers who utilize said product MUST follow these guidelines, and other than that you're free, so fly high!</li>
      </ol>
      <ol>
        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid mb-4 mt-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid414e  heading-bg-color-layout-container-uid414e" data-automation-test-id="layout-container-uid414e">
          <style data-automation-test-id="headingColor-layout-container-uid414e">
                    .heading-bg-color-layout-container-uid414e{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid414e" data-componentname="layout-container-uid414e">
          
          
          <div class="areaheading dynamic-price-container aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/foxtrot/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.ACSHASH9e7434689d3756d7032033ac4474262b.min.js" defer=""></script>


        
        
            
    
<link rel="stylesheet" href="/foxtrot/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.ACSHASHbaac66c7cf340bdab66070c672b4912d.min.css" type="text/css">



        

        <div id="areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc" data-componentname="areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc" class="area-heading   " data-automation-test-id="Areaheading-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc" style="background-color: null">
            
            
    
    
    

            <div class="row">
                
                    <div class="col-12 col-md-8 " data-automation-test-id="AreaheadingHeadingText-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc" style="color:">
                        
                        
                            
                            
    

    <h1 data-automation-test-id="heading-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc" class="component-heading  h2    " id="heading-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc">
        
  
  
  
    

      
      
      

       <p>Microsoft – Terms of Use</p>
 
      
    

    
  

    </h1>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 " data-automation-test-id="AreaheadingSubtext-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc">
                        
                        
                            <div class=" " data-automation-test-id="AreaheadingDesctext-areaheading-2a16df59-62a2-4bc2-96f4-8e6d22b329cc"> 
                                
  
  
  
    

      
      
      

       Last Updated: February 7, 2022 
      
    

    
  

                            </div>
                        
                        
                    </div>
                
            </div>
        </div>
        
    
</div>

          
     </div>
</div>
</div>
<div class="layout-container responsivegrid mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid2a71  heading-bg-color-layout-container-uid2a71" data-automation-test-id="layout-container-uid2a71">
          <style data-automation-test-id="headingColor-layout-container-uid2a71">
                    .heading-bg-color-layout-container-uid2a71{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid2a71" data-componentname="layout-container-uid2a71">
          
          
          <div class="richtext aem-GridColumn aem-GridColumn--default--12" data-component-id="aca330e78c05fd9ffbcf8222be356f7b">
<div class="cmp-text text-break" data-automation-test-id="RichTextV1Div-richtext-uid95f0">
    <h2><span class="h3 mb-0">Acceptance of Terms</span></h2>
<p>The services that Microsoft provides to you are subject to the following Terms of Use ("TOU"). Microsoft reserves the right to update and modify the TOU at any time without notice to you. The most current version of the TOU can be reviewed by clicking on the "Terms of Use" hypertext link located at the bottom of our Web pages. When we make updates to the TOU, Microsoft will update the date at the top of this page. By using the website after a new version of the TOU has been posted, you agree to the terms of such new version.</p>
<h2><span class="h3 mb-0">Description of Services</span></h2>
<p>Through its network of Web properties, Microsoft provides you with access to a variety of resources, including developer tools, download areas, communication forums and product information (collectively "Services"). The Services, including any updates, enhancements, new features, and/or the addition of any new Web properties, are subject to these TOU.</p>
<h2><span class="h3 mb-0">Personal and Non-Commercial Use Limitation</span></h2>
<p>Unless otherwise specified, the Services are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Services.</p>
<h2><span class="h3 mb-0">Privacy and Protection of Personal Information</span></h2>
<p>See the&nbsp;<a href="http://go.microsoft.com/fwlink/?linkid=248681" target="_self" class="ms-rte-link" aria-label="Review the Privacy Statement disclosures" data-bi-compnm="richtext-uid95f0" rel="noopener noreferrer">Privacy Statement</a>&nbsp;disclosures relating to the collection and use of your personal data.</p>
<h2><span class="h3 mb-0">Content</span></h2>
<p>All content included in or made available through the Services, such as text, graphics, logos, icons, images, sounds, music, digital downloads, data compilation, software, and documents is the exclusive property of Microsoft or its content suppliers and is protected by the various applicable trade dress, copyright, trademark, patent, and other intellectual property and unfair competition laws in the United States and internationally. All rights not expressly granted to you in this TOU are reserved and retained by Microsoft or its licensors, suppliers, publishers, rightsholders, or other content providers.</p>
<h2><span class="h3 mb-0">Software</span></h2>
<p>Any software that is made available to download from the Services ("Software") is the copyrighted work of Microsoft and/or its suppliers. Use of the Software is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software ("License Agreement"). An end user will be unable to install any Software that is accompanied by or includes a License Agreement, unless he or she first agrees to the License Agreement terms. Third party scripts or code, linked to or referenced from this website, are licensed to you by the third parties that own such code, not by Microsoft.</p>
<p>The Software is made available for download solely for use by end users according to the License Agreement. Any reproduction or redistribution of the Software not in accordance with the License Agreement is expressly prohibited by law, and may result in severe civil and criminal penalties. Violators will be prosecuted to the maximum extent possible.<br>
</p>
<p><strong>Without limiting the foregoing, copying or reproduction of the software to any other server or location for further reproduction or redistribution is expressly prohibited, unless such reproduction or redistribution is expressly permitted by the license agreement accompanying such software.</strong><br>
</p>
<p><strong>Restricted Rights</strong> <strong>Legend.</strong> Any Software which is downloaded from the Services for or on behalf of the United States of America, its agencies and/or instrumentalities ("U.S. Government"), is provided with Restricted Rights. Use, duplication, or disclosure by the U.S. Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013 or subparagraphs (c)(1) and (2) of the Commercial Computer Software - Restricted Rights at 48 CFR 52.227-19, as applicable. Manufacturer is Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399.<br>
</p>
<h2><span class="h3 mb-0">Documents</span></h2>
<p>Permission to use Documents (such as white papers, press releases, datasheets and FAQs) from the Services is granted, provided that (1) the below copyright notice appears in all copies and that both the copyright notice and this permission notice appear, (2) unless explicitly covered by another license or agreement, use of such Documents from the Services is for informational and non-commercial or personal use only and will not be copied or posted on any network computer or broadcast in any media, and (3) no modifications of any Documents are made. Accredited educational institutions, such as K-12, universities, private/public colleges, and state community colleges, may download and reproduce the Documents for distribution in the classroom. Distribution outside the classroom requires express written permission. Use for any other purpose is expressly prohibited by law, and may result in severe civil and criminal penalties. Violators will be prosecuted to the maximum extent possible.</p>
<p>Documents specified above do not include the design or layout of the Microsoft.com website or any other Microsoft owned, operated, licensed or controlled site. Elements of Microsoft websites are protected by trade dress, trademark, unfair competition, and other laws and may not be copied or imitated in whole or in part. No logo, graphic, sound or image from any Microsoft website may be copied or retransmitted unless expressly permitted by Microsoft.</p>
<h2><span class="h3 mb-0">Representations and Warranties</span></h2>
<p>Software is warranted, if at all, only according to the terms of the license agreement.&nbsp;<strong>Except as warranted in the license agreement, Microsoft corporation hereby disclaims all warranties and conditions with regard to the software, including all warranties and conditions of merchantability, whether express, implied or statutory, fitness for a particular purpose, title and non-infringement.</strong> For your convenience, Microsoft may make available as part of the services or in its software products, tools and utilities for use and/or download.&nbsp;<strong>Microsoft does not make any assurances with regard to the accuracy of the results or output that derives from such use of any such tools and utilities.</strong> Please respect the intellectual property rights of others when using the tools and utilities made available on the services or in Microsoft software products.</p>
<p><strong>Microsoft and/or its respective suppliers make no representations about the suitability of the information contained in the documents and related graphics published as part of the services for any purpose. All such documents and related graphics are provided "as is" without warranty of any kind. Microsoft and/or its respective suppliers hereby disclaim all warranties and conditions with regard to this information, including all warranties and conditions of merchantability, whether express, implied or statutory, fitness for a particular purpose, title and non-infringement. In no event shall Microsoft and/or its respective suppliers be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of information available from the services.</strong><br>
</p>
<p>The documents and related graphics published on the services could include technical inaccuracies or typographical errors. Changes are periodically added to the information herein. Microsoft and/or its respective suppliers may make improvements and/or changes in the product(s) and/or the program(s) described herein at any time.</p>
<h2><span class="h3 mb-0">Limitation of Liability</span></h2>
<p><strong>In no event shall Microsoft and/or its respective suppliers be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of software, documents, provision of or failure to provide services, or information available from the services.</strong></p>
<h2><span class="h3 mb-0">Member Account, Password, and Security</span></h2>
<p>If any of the Services requires you to open an account, you must complete the registration process by providing us with current, complete and accurate information as prompted by the applicable registration form. You also will choose a password and a user name. You are entirely responsible for maintaining the confidentiality of your password and account. Furthermore, you are entirely responsible for any and all activities that occur under your account. You agree to notify Microsoft immediately of any unauthorized use of your account or any other breach of security. Microsoft will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge. However, you could be held liable for losses incurred by Microsoft or another party due to someone else using your account or password. You may not use anyone else's account at any time, without the permission of the account holder.</p>
<h2><span class="h3 mb-0">No Unlawful or Prohibited Use</span></h2>
<p>As a condition of your use of the Services, you will not use the Services for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Services in any manner that could damage, disable, overburden, or impair any Microsoft server, or the network(s) connected to any Microsoft server, or interfere with any other party's use and enjoyment of any Services. You may not attempt to gain unauthorized access to any Services, other accounts, computer systems or networks connected to any Microsoft server or to any of the Services, through hacking, password mining or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Services. You may not attempt to copy or change, alter or otherwise attempt to modify the Services or these TOU.</p>
<h2><span class="h3 mb-0">Use of Services</span></h2>
<p>The Services may contain e-mail services, bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, photo albums, file cabinets and/or other message or communication facilities designed to enable you to communicate with others (each a "Communication Service" and collectively "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and, when applicable, related to the particular Communication Service. By way of example, and not as a limitation, you agree that when using the Communication Services, you will not:</p>
<ul><li>Use the Communication Services in connection with surveys, contests, pyramid schemes, chain letters, junk email, spamming or any duplicative or unsolicited messages (commercial or otherwise).</li></ul>
<ul><li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</li></ul>
<ul><li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, obscene, indecent or unlawful topic, name, material or information.</li></ul>
<ul><li>Upload, or otherwise make available, files that contain images, photographs, software or other material protected by intellectual property laws, including, by way of example, and not as limitation, copyright or trademark laws (or by rights of privacy or publicity) unless you own or control the rights thereto or have received all necessary consent to do the same.</li></ul>
<ul><li>Use any material or information, including images or photographs, which are made available through the Services in any manner that infringes any copyright, trademark, patent, trade secret, or other proprietary right of any party.</li></ul>
<ul><li>Upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another's computer or property of another.</li></ul>
<ul><li>Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Services specifically allows such messages.</li></ul>
<ul><li>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally reproduced, displayed, performed, and/or distributed in such manner.</li></ul>
<ul><li>Falsify or delete any copyright management information, such as author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li></ul>
<ul><li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li></ul>
<ul><li>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li></ul>
<ul><li>Harvest or otherwise collect information about others, including e-mail addresses.</li></ul>
<ul><li>Violate any applicable laws or regulations.</li></ul>
<ul><li>Create a false identity for the purpose of misleading others.</li></ul>
<ul><li>Use, download or otherwise copy, or provide (whether or not for a fee) to a person or entity any directory of users of the Services or other user or usage information or any portion thereof.</li></ul>
<p>Microsoft has no obligation to monitor the Communication Services. However, Microsoft reserves the right to review materials posted to the Communication Services and to remove any materials in its sole discretion. Microsoft reserves the right to terminate your access to any or all of the Communication Services at any time, without notice, for any reason whatsoever.</p>
<p>Microsoft reserves the right at all times to disclose any information as Microsoft deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Microsoft's sole discretion.<br>
</p>
<p>Always use caution when giving out any personally identifiable information about yourself or your children in any Communication Services. Microsoft does not control or endorse the content, messages or information found in any Communication Services and, therefore, Microsoft specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Services. Managers and hosts are not authorized Microsoft spokespersons, and their views do not necessarily reflect those of Microsoft.<br>
</p>
<p>Materials uploaded to the Communication Services may be subject to posted limitations on usage, reproduction and/or dissemination; you are responsible for adhering to such limitations if you download the materials.<br>
</p>
<p><strong>AI Services.</strong><br>
</p>
<p>”AI services” are services that are labeled or described by Microsoft as including, using, powered by, or being an Artificial Intelligence (“AI”) system.</p>
<ul><li><strong>Reverse Engineering.</strong>&nbsp;You may not use the AI services to discover any underlying components of the models, algorithms, and systems. For example, you may not try to determine and remove the weights of models.</li></ul>
<ul><li><strong>Extracting Data.</strong>&nbsp;You may not use web scraping, web harvesting, or web data extraction methods to extract data from the AI services.</li></ul>
<ul><li><strong>Limits on use of data from the AI Services.&nbsp;</strong>You may not use the AI services, or data from the AI services, to create, train, or improve (directly or indirectly) any other AI service.&nbsp;</li></ul>
<ul><li><strong>Use of&nbsp;Your Content.</strong>&nbsp;As part of providing the AI services, Microsoft will process and store your inputs to the service as well as output from the service, for purposes of monitoring for and preventing abusive or harmful uses or outputs of the service.</li></ul>
<ul><li><strong>Third party claims</strong>.&nbsp;You are solely responsible for responding to any third-party claims regarding your use of the AI services in compliance with applicable laws (including, but not limited to, copyright infringement or other claims relating to content output during your use of the AI services).</li></ul>
<h2><span class="h3 mb-0">Materials Provided to Microsoft or Posted at any Microsoft Website</span></h2>
<p>Microsoft does not claim ownership of the materials you provide to Microsoft (including feedback and suggestions) or post, upload, input or submit to any Services or its associated services for review by the general public, or by the members of any public or private community, (each a "Submission" and collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting ("Posting") your Submission you are granting Microsoft, its affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses (including, without limitation, all Microsoft Services), including, without limitation, the license rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; to publish your name in connection with your Submission; and the right to sublicense such rights to any supplier of the Services.</p>
<p>No compensation will be paid with respect to the use of your Submission, as provided herein. Microsoft is under no obligation to post or use any Submission you may provide and Microsoft may remove any Submission at any time in its sole discretion.<br>
</p>
<p>By Posting a Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in these Terms of Use including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.<br>
</p>
<p>In addition to the warranty and representation set forth above, by Posting a Submission that contain images, photographs, pictures or that are otherwise graphical in whole or in part ("Images"), you warrant and represent that (a) you are the copyright owner of such Images, or that the copyright owner of such Images has granted you permission to use such Images or any content and/or images contained in such Images consistent with the manner and purpose of your use and as otherwise permitted by these Terms of Use and the Services, (b) you have the rights necessary to grant the licenses and sublicenses described in these Terms of Use, and (c) that each person depicted in such Images, if any, has provided consent to the use of the Images as set forth in these Terms of Use, including, by way of example, and not as a limitation, the distribution, public display and reproduction of such Images. By Posting Images, you are granting (a) to all members of your private community (for each such Images available to members of such private community), and/or (b) to the general public (for each such Images available anywhere on the Services, other than a private community), permission to use your Images in connection with the use, as permitted by these Terms of Use, of any of the Services, (including, by way of example, and not as a limitation, making prints and gift items which include such Images), and including, without limitation, a non-exclusive, world-wide, royalty-free license to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Images without having your name attached to such Images, and the right to sublicense such rights to any supplier of the Services. The licenses granted in the preceding sentences for a Images will terminate at the time you completely remove such Images from the Services, provided that, such termination shall not affect any licenses granted in connection with such Images prior to the time you completely remove such Images. No compensation will be paid with respect to the use of your Images.</p>
<h2><span class="h3 mb-0">Notices and Procedure for Making Claims of Copyright Infringement</span></h2>
<p>Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be sent to Service Provider's Designated Agent. All inquiries not relevant to the following procedure will not receive a response.</p>
<p>See&nbsp;<a href="http://www.microsoft.com/info/cpyrtinfrg.aspx" target="_self" class="ms-rte-link" aria-label="Visit Infringement Notices to locate the notice and procedure for making claims of copyright infringement" data-bi-compnm="richtext-uid95f0" rel="noopener noreferrer">Notice and Procedure for Making Claims of Copyright Infringement</a>.</p>
<h2><span class="h3 mb-0">Links to Third Party Sites</span></h2>
<p>The links in this area will let you leave Microsoft's site. The linked sites are not under the control of Microsoft and&nbsp;<strong>Microsoft is not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. Microsoft is not responsible for webcasting or any other form of transmission received from any linked site.&nbsp;</strong>Microsoft is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Microsoft of the site.</p>
<h2><span class="h3 mb-0">Unsolicited Idea Submission Policy</span></h2>
<p>Microsoft or any of its employees do not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new products or technologies, processes, materials, marketing plans or new product names. Please do not send any original creative artwork, samples, demos, or other works. The sole purpose of this policy is to avoid potential misunderstandings or disputes when Microsoft's products or marketing strategies might seem similar to ideas submitted to Microsoft. So, please do not send your unsolicited ideas to Microsoft or anyone at Microsoft. If, despite our request that you not send us your ideas and materials, you still send them, please understand that Microsoft makes no assurances that your ideas and materials will be treated as confidential or proprietary.</p>

</div>

    

</div>

          
     </div>
</div>
</div>
<div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid1b51  heading-bg-color-layout-container-uid1b51" data-automation-test-id="layout-container-uid1b51">
          <style data-automation-test-id="headingColor-layout-container-uid1b51">
                    .heading-bg-color-layout-container-uid1b51{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid1b51" data-componentname="layout-container-uid1b51">
          
          
          <div class="socialfollow aem-GridColumn aem-GridColumn--default--12" data-component-id="f881184c0350e55b789024b15f22837e">

    


    
    
<link rel="stylesheet" href="/foxtrot/etc.clientlibs/microsoft/components/content/socialfollow/v1/socialfollow/clientlibs/site.ACSHASH01541d14dd222335567dff92d701b802.min.css" type="text/css">
<script src="/foxtrot/etc.clientlibs/microsoft/components/content/socialfollow/v1/socialfollow/clientlibs/site.ACSHASHb65a051bd39f23fb21bc2a225b90a8a5.min.js"></script>






<link rel="canonical" href="https://www.microsoft.com/en-us/legal/terms-of-use">

    <section class="col-12" aria-label="follow us on social media" id="socialfollow-07e28a38-a673-4fc2-bb5e-76dc9abcb9e" data-componentname="socialfollow-07e28a38-a673-4fc2-bb5e-76dc9abcb9e">
        <h3 class="base font-weight-normal d-inline align-middle mr-g">
            Follow Microsoft
        </h3>
        <ul class="list-inline d-inline-block align-middle mb-0 socialfollow-ul">
            <li class="list-inline-item mr-g socialfollow-li">
                
                <a class="d-inline-block action-trigger" href="https://www.facebook.com/Microsoft" target="_blank" aria-label="Follow Microsoft on Facebook, opens in a new tab" data-bi-ecn="Follow Microsoft on Facebook" data-bi-bhvr="126" data-bi-cn="Follow Microsoft on Facebook" data-bi-socchn="Follow Microsoft on Facebook" data-bi-ct="Social Button" data-bi-pa="body" data-bi-compnm="Social Follow - horizontal">
                    
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook 2x-1?scl=1" data-src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook 2x-1?scl=1" alt="Facebook" title="Follow Microsoft on Facebook" width="32" height="32">					
                    
                    
                </a>
            </li>
        
            <li class="list-inline-item mr-g socialfollow-li">
                
                <a class="d-inline-block action-trigger" href="https://www.twitter.com/Microsoft" target="_blank" aria-label="Follow Microsoft on X, opens in a new tab" data-bi-ecn="Follow Microsoft on X" data-bi-bhvr="126" data-bi-cn="Follow Microsoft on X" data-bi-socchn="Follow Microsoft on X" data-bi-ct="Social Button" data-bi-pa="body" data-bi-compnm="Social Follow - horizontal">
                    
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter 2x-1?scl=1" data-src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter 2x-1?scl=1" alt="X" title="Follow Microsoft on X" width="32" height="32">					
                    
                    
                </a>
            </li>
        
            <li class="list-inline-item mr-g socialfollow-li">
                
                <a class="d-inline-block action-trigger" href="https://www.linkedin.com/company/microsoft" target="_blank" aria-label="Follow Microsoft on LinkedIn, opens in a new tab" data-bi-ecn="Follow Microsoft on LinkedIn" data-bi-bhvr="126" data-bi-cn="Follow Microsoft on LinkedIn" data-bi-socchn="Follow Microsoft on LinkedIn" data-bi-ct="Social Button" data-bi-pa="body" data-bi-compnm="Social Follow - horizontal">
                    
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Linkedin 2x-1?scl=1" data-src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Linkedin 2x-1?scl=1" alt="LinkedIn" title="Follow Microsoft on LinkedIn" width="32" height="32">					
                    
                    
                </a>
            </li>
        </ul>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Microsoft",
                "url": "https://www.microsoft.com/",
                "sameAs":["https://www.facebook.com/Microsoft","https://www.twitter.com/Microsoft","https://www.linkedin.com/company/microsoft"]
            };
        </script>
    </section>



    
</div>

          
     </div>
</div>
</div>

    
</div>
      </ol>
      <p>Enjoy your retro desktop experience!</p>
      <footer>Follow <a href="https://www.youtube.com/@TheBananamanJCGaming">@TheBananamanJCGaming</a> on YouTube for more projects like this!</footer>
    </div>
  `,
  width: 400,
  height: 300,
  className: 'no-controls'
},
jspaint: {
  title: 'Paint',
  content: () => `
    <iframe src="https://jspaint.app" style="width:100%; height:100%; border:none;"></iframe>
  `,
  width: 800,
  height: 600,
  className: 'no-controls'
},
winamp: {
  title: 'WinAmp',
  content: () => `<head><script src="https://unpkg.com/webamp@1.4.0/built/webamp.bundle.min.js"></script></head><div style="width:40px; height:40px; position:absolute; bottom:0px; left:0px;">
	<div id="winamp-container"></div>
    <script>
const Winamp = window.Webamp;
// All configuration options are optional.
const webamp = new Webamp({
    // Optional.
    initialTracks: [
        {
            metaData: {
                artist: "Artist",
                title: "Title",
            },
            url: "URL TO SONG .mp3",
        }, {
            metaData: {
                artist: "Artist",
                title: "Title",
            },
            url: "URL TO SONG .mp3",
        },
        {
            metaData: {
                artist: "Artist",
                title: "Title",
            },
            url: "URL TO SONG .mp3",
        },
      ],
    initialSkin: {
        url: "URL TO SKIN .WSZ"
    },
});
webamp.renderWhenReady(document.getElementById('winamp-container'));
</script>
</div>`,
  width: 200,
  height: 400,
  className: 'no-controls'
},
saveas: {
  title: 'Save As',
  content: () => `
    <div class="window-body" style="padding:0.5em;">
      <div class="field-row-stacked">
        <label for="filename">File name:</label>
        <input type="text" id="filename" value="note.txt" style="width:100%;">
      </div>

      <div class="field-row-stacked" style="margin-top:1em;">
        <label for="filetype">Save as type:</label>
        <select id="filetype" style="width:100%;">
          <option value="txt">Text Document (*.txt)</option>
          <option value="html">Web Page (*.htm; *.html)</option>
          <option value="rtf">Rich Text Format (*.rtf)</option>
        </select>
      </div>

      <div class="field-row-stacked" style="margin-top:1em;">
        <label>Save in:</label>
        <div class="save-location">
          <ul class="folder-list">
            <li><strong>Downloads</strong> (C:\\Users\\BNAOS\\Downloads)</li>
            <li>Documents</li>
            <li>Pictures</li>
            <li>Music</li>
            <li>Videos</li>
          </ul>
        </div>
      </div>

      <div class="field-row" style="justify-content: flex-end; margin-top:1em;">
        <button class="button primary" id="confirm-saveas">Save</button>
        <button class="button" id="cancel-saveas">Cancel</button>
      </div>
    </div>
  `,
  width: 500,
  height: 320,
  className: 'no-controls'
},
word: {
  title: 'Word',
  content: () => `
    <style>
      /* Root and typography */
      .w7-word {
        display: grid;
        grid-template-rows: auto auto auto 1fr auto;
        height: 100%;
        font-family: "Segoe UI", Tahoma, Arial, sans-serif;
        color: #1f2a44;
        letter-spacing: 0.1px;
      }

      /* Top chrome: orb, QAT, tabs (Win7 ribbon cap height) */
      .w7-top {
        position: relative;
        height: 36px;
        background: linear-gradient(#2f6db3, #274f87);
        border-bottom: 1px solid #1f3f6f;
      }
      .w7-orb {
        position: absolute; left: 6px; top: 4px;
        width: 28px; height: 28px; border-radius: 50%;
        background: radial-gradient(circle at 30% 28%, #8dc0ff 0%, #5a98df 45%, #2b579a 70%, #234a86 100%);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.35);
        display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 12px;
        cursor: pointer;
      }
      .w7-qat {
        position: absolute; left: 44px; top: 6px;
        display: flex; gap: 6px;
      }
      .w7-qat button {
        width: 22px; height: 22px; line-height: 0;
        background: linear-gradient(#fefefe, #f1f3f8);
        border: 1px solid #c5cbd7; border-radius: 2px;
        box-shadow: inset 0 0 0 1px #fff;
        cursor: pointer;
      }
      .w7-tabs {
        position: absolute; left: 8px; right: 8px; bottom: 0;
        height: 26px; display: flex; gap: 2px; align-items: end;
      }
      .w7-tab {
        border: 1px solid transparent; border-bottom: none;
        color: #eaf2ff; padding: 5px 12px 5px;
        border-radius: 4px 4px 0 0; cursor: pointer; font-size: 13px;
      }
      .w7-tab.active {
        background: #ffffff;
        color: #1f2940;
        border-color: #bfc7d3;
      }

      /* Ribbon body */
      .w7-ribbon {
        background: linear-gradient(#f7f8fc, #eef2f9);
        border-top: 1px solid #c7cede;
        border-bottom: 1px solid #c7cede;
        display: flex; gap: 14px; padding: 8px 10px 12px;
      }
      .w7-group {
        position: relative; background: #fff;
        border: 1px solid #d7dce7; border-radius: 3px;
        padding: 6px 8px 18px; min-width: 170px;
        display: grid; align-content: start; row-gap: 6px;
      }
      .w7-group .label {
        position: absolute; left: 50%; transform: translateX(-50%);
        bottom: -10px; padding: 0 6px; font-size: 10px; color: #5b6678; background: #eef2f9;
      }
      .w7-row { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
      .w7-icon, .w7-btn, .w7-drop {
        background: linear-gradient(#fff, #f1f4fa);
        border: 1px solid #cfd6e2; border-radius: 2px;
        padding: 4px 6px; font-size: 12px; cursor: pointer;
      }
      .w7-icon { width: 26px; height: 26px; display: grid; place-items: center; padding: 0; }
      .w7-drop::after { content: " ▼"; font-size: 10px; color: #556; }
      .w7-icon:hover, .w7-btn:hover, .w7-drop:hover { background: #fff; }
      .w7-icon:active, .w7-btn:active, .w7-drop:active { background: #e9edf7; box-shadow: inset 0 0 0 1px #d0d7e4; }

      /* Dialog box launcher */
      .w7-launch {
        position: absolute; right: 4px; bottom: 2px; width: 14px; height: 14px;
        display: grid; place-items: center; color: #6b7384; cursor: pointer;
      }
      .w7-launch::before {
        content: "▾"; font-size: 12px; transform: rotate(-45deg);
      }

      /* Styles gallery */
      .w7-styles {
        display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
      }
      .w7-style {
        border: 1px solid #cfd6e2; background: linear-gradient(#fff, #f5f7fb);
        padding: 6px; font-size: 11px; text-align: center; cursor: pointer;
      }

      /* Backstage (orb menu) */
      .w7-backstage {
        position: absolute; inset: 36px 0 auto 0; height: 280px; display: none;
      }
      .w7-backstage.open { display: grid; grid-template-columns: 220px 1fr; }
      .w7-bs-left {
        background: #2b579a; color: #fff; padding: 12px; display: grid; gap: 6px;
      }
      .w7-bs-left .item {
        padding: 8px 10px; border-radius: 3px; cursor: pointer;
      }
      .w7-bs-left .item:hover { background: rgba(255,255,255,0.12); }
      .w7-bs-right {
        background: #f6f8fc; border-bottom: 1px solid #c7cede; padding: 16px;
      }

      /* Document chrome */
      .w7-docwrap { display: grid; grid-template-rows: 24px 1fr; background: #d7d7d7; }
      .w7-ruler {
        height: 24px; background: linear-gradient(#f6f6f6, #ececec);
        border-bottom: 1px solid #c8c8c8; display: grid; align-items: center;
        padding: 0 30px; font-size: 10px; color: #666; letter-spacing: 2px;
      }
      .w7-scroll { overflow: auto; padding: 24px 0; }

      /* Page and zoom */
      .w7-page {
        background: #fff; width: 816px; /* 8.5in at 96dpi ≈ 816px */
        min-height: 1056px; /* 11in at 96dpi */
        margin: 0 auto; padding: 96px; /* 1in margins */
        box-shadow: 0 0 6px rgba(0,0,0,0.28); outline: none;
        transform-origin: top center;
      }

      /* Status bar */
      .w7-status {
        height: 26px; background: linear-gradient(#f3f3f3, #e9e9e9);
        border-top: 1px solid #c8c8c8; display: flex; align-items: center; justify-content: space-between;
        padding: 0 10px; font-size: 12px; color: #444;
      }
      .w7-status .seg { display: flex; align-items: center; gap: 12px; }
      .w7-div { width: 1px; height: 14px; background: #bdbdbd; }
      .w7-zoom { display: flex; align-items: center; gap: 6px; }
      .w7-zoom input[type="range"] { width: 160px; }

      /* Tooltips (enhanced) */
      .w7-tip {
        position: fixed; z-index: 99999; pointer-events: none; display: none;
        background: #ffffe1; border: 1px solid #c9c993; border-radius: 2px;
        padding: 6px 8px; font-size: 12px; color: #222; box-shadow: 0 1px 2px rgba(0,0,0,0.15);
      }

      /* Custom scrollbars (scoped) */
      .w7-scroll::-webkit-scrollbar { width: 10px; }
      .w7-scroll::-webkit-scrollbar-track { background: lightgray; }
      .w7-scroll::-webkit-scrollbar-thumb {
        background:
          linear-gradient(to bottom, #dbe6f1, #a8b8c8),
          repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent calc(33% - 6px),
            #666 calc(33% - 6px),
            #666 calc(33% - 4px),
            transparent calc(33% - 4px),
            transparent calc(66% - 2px),
            #666 calc(66% - 2px),
            #666 calc(66%),
            transparent calc(66%),
            transparent calc(100% - 2px),
            #666 calc(100% - 2px),
            #666 100%
          );
        background-blend-mode: multiply; border: 1px solid #888; box-shadow: inset 0 0 1px #666;
      }

      /* Selection visuals feel */
      .w7-page *::selection { background: rgba(153, 191, 255, 0.6); }
      .w7-page { -webkit-user-select: text; user-select: text; }
    </style>

    <div class="w7-word" data-zoom="100">
      <!-- Top (orb, QAT, tabs) -->
      <div class="w7-top">
        <div class="w7-orb" data-tip="File (Alt+F)">W</div>
        <div class="w7-qat">
          <button data-cmd="save" data-tip="Save (Ctrl+S)">💾</button>
          <button data-cmd="undo" data-tip="Undo (Ctrl+Z)">↶</button>
          <button data-cmd="redo" data-tip="Redo (Ctrl+Y)">↷</button>
        </div>
        <div class="w7-tabs">
          <div class="w7-tab" data-tab="insert">Insert</div>
          <div class="w7-tab" data-tab="layout">Page Layout</div>
          <div class="w7-tab" data-tab="references">References</div>
          <div class="w7-tab" data-tab="mailings">Mailings</div>
          <div class="w7-tab" data-tab="review">Review</div>
          <div class="w7-tab" data-tab="view">View</div>
        </div>
        <div class="w7-backstage" id="w7Backstage">
          <div class="w7-bs-left">
            <div class="item">Save</div>
            <div class="item">Save As</div>
            <div class="item">Open</div>
            <div class="item">Close</div>
            <div class="item">Options</div>
          </div>
          <div class="w7-bs-right">
            <h3 style="margin:0 0 8px;">Info</h3>
            <p style="margin:0;">This is a mock Backstage area for the Word‑like app.</p>
          </div>
        </div>
      </div>

      <!-- Ribbon (Home tab content shown) -->
      <div class="w7-ribbon" id="w7Ribbon">
        <!-- Font -->
        <div class="w7-group">
          <div class="w7-row">
            <button class="w7-drop" id="fontFamily">Calibri</button>
            <button class="w7-drop" id="fontSize">11</button>
          </div>
          <div class="w7-row">
            <button class="w7-icon" data-exec="bold" data-tip="Bold (Ctrl+B)"><b>B</b></button>
            <button class="w7-icon" data-exec="italic" data-tip="Italic (Ctrl+I)"><i>I</i></button>
            <button class="w7-icon" data-exec="underline" data-tip="Underline (Ctrl+U)"><u>U</u></button>
            <button class="w7-icon" data-exec="strikethrough" data-tip="Strikethrough"><s>S</s></button>
          </div>
          <div class="w7-row">
            <button class="w7-btn" data-execv="foreColor:#2b579a" data-tip="Font Color">A</button>
            <button class="w7-btn" data-execv="hiliteColor:#fff59d" data-tip="Text Highlight">▇</button>
          </div>
          <div class="w7-launch" data-tip="Font dialog"></div>
          <div class="label">Font</div>
        </div>

        <!-- Paragraph -->
        <div class="w7-group">
          <div class="w7-row">
            <button class="w7-icon" data-exec="insertUnorderedList" data-tip="Bullets">•</button>
            <button class="w7-icon" data-exec="insertOrderedList" data-tip="Numbering">1.</button>
            <button class="w7-icon" data-exec="outdent" data-tip="Decrease Indent">⇤</button>
            <button class="w7-icon" data-exec="indent" data-tip="Increase Indent">⇥</button>
          </div>
          <div class="w7-row">
            <button class="w7-icon" data-execv="justify:left" data-tip="Align Left">≡</button>
            <button class="w7-icon" data-execv="justify:center" data-tip="Center">≡</button>
            <button class="w7-icon" data-execv="justify:right" data-tip="Align Right">≡</button>
            <button class="w7-icon" data-execv="justify:full" data-tip="Justify">≡</button>
          </div>
          <div class="w7-launch" data-tip="Paragraph dialog"></div>
          <div class="label">Paragraph</div>
        </div>

        <!-- Styles -->
        <div class="w7-group" style="min-width:220px;">
          <div class="w7-styles">
            <div class="w7-style" data-style="normal">Normal</div>
            <div class="w7-style" data-style="strong"><b>Strong</b></div>
            <div class="w7-style" data-style="emphasis"><i>Emphasis</i></div>
            <div class="w7-style" data-style="u"><u>Underline</u></div>
            <div class="w7-style" data-style="h1">Heading 1</div>
            <div class="w7-style" data-style="h2">Heading 2</div>
          </div>
          <div class="label">Styles</div>
        </div>
      </div>

      <!-- Document area (ruler + scroll with page) -->
      <div class="w7-docwrap">
        <div class="w7-ruler">0   1   2   3   4   5   6   7   8</div>
        <div class="w7-scroll">
          <div class="w7-page" id="w7Page" contenteditable="true">Start typing here...</div>
        </div>
      </div>

      <!-- Status bar -->
      <div class="w7-status">
        <div class="seg">
          <span id="w7PageInfo">Page 1 of 1</span>
          <div class="w7-div"></div>
          <span id="w7Words">Words: 0</span>
          <div class="w7-div"></div>
          <span>English (United States)</span>
        </div>
        <div class="seg w7-zoom">
          <span>Zoom</span>
          <input id="w7Zoom" type="range" min="50" max="200" value="100" />
          <span id="w7ZoomLabel">100%</span>
        </div>
      </div>

      <!-- Tooltip -->
      <div class="w7-tip" id="w7Tip"></div>
    </div>

    <script>
      (() => {
        const root = document.currentScript.closest('.window, .w7-word')?.querySelector('.w7-word') || document.querySelector('.w7-word');
        const page = root.querySelector('#w7Page');
        const tip = root.querySelector('#w7Tip');
        const backstage = root.querySelector('#w7Backstage');
        const zoomInput = root.querySelector('#w7Zoom');
        const zoomLabel = root.querySelector('#w7ZoomLabel');
        const wordsLbl = root.querySelector('#w7Words');

        /* Backstage toggle (orb) */
        root.querySelector('.w7-orb').addEventListener('click', () => {
          backstage.classList.toggle('open');
        });

        /* Tabs visual (single-tab demo) */
        root.querySelectorAll('.w7-tab').forEach(tab => {
          tab.addEventListener('click', () => {
            root.querySelectorAll('.w7-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // For a full app, swap ribbon contents here based on data-tab
          });
        });

        /* Tooltip behavior */
        const tipTargets = root.querySelectorAll('[data-tip]');
        tipTargets.forEach(el => {
          el.addEventListener('mouseenter', e => {
            tip.textContent = el.getAttribute('data-tip');
            tip.style.display = 'block';
          });
          el.addEventListener('mousemove', e => {
            tip.style.left = (e.clientX + 12) + 'px';
            tip.style.top = (e.clientY + 16) + 'px';
          });
          el.addEventListener('mouseleave', () => tip.style.display = 'none');
        });

        /* Formatting with execCommand (simple, nostalgic) */
        function exec(cmd, val) {
          document.execCommand(cmd, false, val || null);
          page.focus();
        }
        root.querySelectorAll('[data-exec]').forEach(b => b.addEventListener('click', () => exec(b.dataset.exec)));
        root.querySelectorAll('[data-execv]').forEach(b => {
          b.addEventListener('click', () => {
            const [k, v] = b.dataset.execv.split(':');
            if (k === 'justify') exec('justify' + v[0].toUpperCase() + v.slice(1));
            else exec(k, v);
          });
        });

        /* Font family/size dropdowns (mock quick sets) */
        root.querySelector('#fontFamily').addEventListener('click', () => {
          const next = { 'Calibri':'Times New Roman', 'Times New Roman':'Arial', 'Arial':'Calibri' };
          const btn = root.querySelector('#fontFamily');
          btn.textContent = next[btn.textContent] || 'Calibri';
          exec('fontName', btn.textContent);
        });
        root.querySelector('#fontSize').addEventListener('click', () => {
          const next = { '11':'12', '12':'14', '14':'16', '16':'11' };
          const btn = root.querySelector('#fontSize');
          btn.textContent = next[btn.textContent] || '12';
          exec('fontSize', { '11':'3','12':'3','14':'4','16':'5' }[btn.textContent] || '3');
        });

        /* Styles gallery quick‑apply */
        root.querySelectorAll('.w7-style').forEach(s => s.addEventListener('click', () => {
          const st = s.dataset.style;
          if (st === 'normal') { exec('removeFormat'); return; }
          if (st === 'strong') { exec('bold'); return; }
          if (st === 'emphasis') { exec('italic'); return; }
          if (st === 'u') { exec('underline'); return; }
          if (st === 'h1') { exec('formatBlock', '<h1>'); return; }
          if (st === 'h2') { exec('formatBlock', '<h2>'); return; }
        }));

        /* Zoom (true page scaling, like decompiled binaries) */
        function setZoom(v) {
          page.style.transform = 'scale(' + (v/100) + ')';
          root.dataset.zoom = v;
          zoomLabel.textContent = v + '%';
        }
        zoomInput.addEventListener('input', e => setZoom(e.target.value));
        setZoom(100);

        /* Word count (status bar) */
        function countWords(txt) {
          const s = txt.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').trim();
          if (!s) return 0;
          return s.split(/\\s+/).length;
        }
        function updateWords() {
          wordsLbl.textContent = 'Words: ' + countWords(page.innerHTML);
        }
        page.addEventListener('input', updateWords);
        updateWords();

        /* Keyboard shortcuts (nostalgic) */
        root.addEventListener('keydown', e => {
          if (e.ctrlKey) {
            if (e.key.toLowerCase() === 'b') { exec('bold'); e.preventDefault(); }
            if (e.key.toLowerCase() === 'i') { exec('italic'); e.preventDefault(); }
            if (e.key.toLowerCase() === 'u') { exec('underline'); e.preventDefault(); }
            if (e.key.toLowerCase() === 'z') { exec('undo'); e.preventDefault(); }
            if (e.key.toLowerCase() === 'y') { exec('redo'); e.preventDefault(); }
            if (e.key.toLowerCase() === 's') { /* mock save */ e.preventDefault(); }
          }
          if (e.altKey && (e.key === 'f' || e.key === 'F')) { backstage.classList.toggle('open'); e.preventDefault(); }
        });

        /* Dialog launchers (mock) */
        root.querySelectorAll('.w7-launch').forEach(ln => {
          ln.addEventListener('click', () => {
            alert('This would open the classic dialog (mock).');
          });
        });

        /* Focus the page for immediate typing */
        setTimeout(() => page.focus(), 50);
      })();
    </script>
  `,
  width: 700,
  height: 500
},
cmd: {
    title: 'Administrator:C:\\Windows\\system32\\cmd.exe',
    content: () => '<style>body { background-color: black; border: none; }</style> <iframe id="kernel32" src="system32/cmd.html" style="width: 100vw; height: 100vh; border: none;"></iframe>',
  width: 700,
  height: 500
},
license: {
  title: 'Windows Activation',
  content: () => `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; text-shadow: none; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
      
      <h2 style="color: #1a4fa3; margin-top: 0; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Type your product key</h2>
      
      <p style="font-size: 14px; font-weight: lighter; color: #000; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
        The Windows 7 Professional product key can be found on the installation disc holder inside the Windows package. 
        Activation will register the product key to this computer.
      </p>

      <p style="margin-top: 20px; font-size: 14px; color: #000; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
        The product key looks like this:
      </p>

      <p style="font-weight: bold; font-size: 16px; margin: 10px 0; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
        PRODUCT KEY: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
      </p>

      <a href="#productkey" style="font-size: 13px; color: #1a4fa3; text-decoration: underline; display: block; margin-bottom: 20px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">
        Where do I find my Windows product key?
      </a>

      <label for="prod-key" style="font-size: 14px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;"><style="font-size: 14px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;"u>P</u>roduct Key:</label><br>
      <input 
        id="prod-key" 
        type="text" 
        style="width: 60%; font-size: 14px; padding: 6px; margin-top: 5px; margin-bottom: 20px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_select.cur'), text !important;" maxlength="29"
      >
      
<script>
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prod-key').addEventListener('input', function (e) {
        let formattedValue = '';
        const value = e.target.value.replace(/-/g, ''); // Remove existing dashes

        for (let i = 0; i < value.length; i++) {
            formattedValue += value[i];
            if ((i + 1) % 5 === 0 && (i + 1) < value.length) { // Add dash every 5 digits, but not after the last digit
                formattedValue += '-';
            }
        }

        // Truncate if the formatted value exceeds the effective max length (25 digits + 4 dashes)
        if (formattedValue.length > 29) {
            formattedValue = formattedValue.substring(0, 29);
        }

        e.target.value = formattedValue;
    });
});
</script>


      <div style="border-top: 1px solid #ccc; padding-top: 10px; display: flex; justify-content: flex-end; gap: 10px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
        <button style="font-size: 14px; padding: 5px 15px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Next</button>
        <button style="font-size: 14px; padding: 5px 15px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Cancel</button>
      </div>

      <div style="margin-top: 30px; font-size: 13px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
        <a href="#activation" style="color: #1a4fa3; text-decoration: underline; display: block; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">What is activation?</a>
        <a href="#privacy" style="color: #1a4fa3; text-decoration: underline; display: block; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">Read the privacy statement online</a>
        <p style="cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;"><i style="cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Note from BNAOS: You <b style="cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">MUST</b> have a license to utilize professional features. If you don't activate, you have unlimited time of use for normal features, but you won't be able to do certain things normally. Also, when you submit your product key, you must add dashes every five characters or it won't work. Email <a href="mailto:thebananamanjc@gmail.com">thebananamanjc@gmail.com</a> on GMail for product key information. For a free trial, enter this product key: 12345-67890-trial-today-test1.</i></p>
      </div>
    </div>
  `,
  width: 700,
  height: 500
},
minecraftlauncher: {
  title: 'Minecraft Launcher',
  content: () => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BNALauncher</title>
    <link rel="stylesheet" href="/third-parties/mcl-style.css">
    <link rel="stylesheet" media="screen and (max-width: 1100px)" href="css/screensize.css">
    <link rel="stylesheet" media="screen and (max-height: 550px)" href="css/screensize.css">
    <link rel="shortcut icon" href="./assets/images/logo.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!-- Discord -->
    <meta content="BNALauncher" property="og:title">
    <meta content="A cool minecraft themed launcher for EaglerCraft!" property="og:description">
    <meta content="https://bna-launcher.vercel.app/" property="og:url">
    <meta content="https://irv77.github.io/AmplerLauncher/assets/images/logo.png" property="og:image">
    <meta content="#786d81" data-react-helmet="true" name="theme-color">
    <!-- Mobile & PWA -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="apple-touch-icon" href="https://irv77.github.io/AmplerLauncher/assets/images/logo.png">
    <meta name="description" content="This is a modern Minecraft styled EaglerCraft launcher application">
    <meta name="theme-color" content="#000000">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="BNALauncher">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="BNALauncher">
</head>

<body>
    <div id="notescreen"></div>
    <div id="naerror" class="error">
        <div>
            <p style="margin-left: 1vw;" class="bolded">SORRY!</p>
            <p style="color: goldenrod;" id="errortext">This feature hasn't been made yet.</p>
        </div>
    </div>
    <div id="screenerror" class="error">
        <div>
            <p style="margin-left: 1vw;" class="bolded">WARNING!</p>
            <p>This screen resolution is buggy!</p>
        </div>
    </div>
    <div class="sidebar" id="sidebar">
        <div id="gtabs1" class="sidebarOptions" style="gap: 1vw;" onclick="location.href='https://discord.gg/xuu8TnSY4b'">
            <img src="./assets/images/sidebar/m-discord.png"><div class="gTabsText"><p>Discord</p></div>
        </div>
        <div onclick="webedition()" id="gtabs2" class="sidebarOptions selected">
            <img src="./assets/images/sidebar/i-web.png">
            <div class="gTabsText">
                <p class="eaglercraftText"> EAGLERCRAFT : </p>
                <p>Web Edition </p>
            </div>
        </div>
        <div onclick="moddededition()" id="gtabs3" class="sidebarOptions">
            <img src="./assets/images/sidebar/i-modded.png">
            <div class="gTabsText">
                <p class="eaglercraftText"> EAGLERCRAFT : </p>
                <p>Modded Editions </p>
            </div>
        </div>
        <div onclick="eaglercontrols()" id="gtabs4" class="sidebarOptions">
            <img src="./assets/images/sidebar/i-controls.png">
            <div class="gTabsText">
                <p class="eaglercraftText"> EAGLERCRAFT : </p>
                <p>Mobile/Controller </p>
            </div>
        </div>
        <div id="gtabs5" class="sidebarOptions sidebarBottom" onclick="errorNA('credits')">
            <img src="./assets/images/sidebar/m-credits.png"><div class="gTabsText"><p> Credits</p></div>
        </div>
        <div id="gtabs6" class="sidebarOptions sidebarBottom" onclick="errorNA('settings')">
            <img src="./assets/images/sidebar/m-settings.png"><div class="gTabsText"><p> Settings</p></div>
        </div>
        <div class="launcherVersion"><p>v1.4.00</p></div>
    </div>
    <div class="mainPage">
        <div class="gameHeader">
            <p id="gameedition" class="currentGame bolded">EAGLERCRAFT: WEB EDITION</p>
                <ul class="gameTabs">
                    <li id="header1" class="headerButtons selected" onclick="playheader()">Play</li>
                    <li id="header2" style="display: none;" class="headerButtons" onclick="modsheader()">Mods</li>
                    <li id="header3" class="headerButtons" onclick="faqsheader()">FAQ</li>
                    <li id="header4" class="headerButtons" onclick="installationheader()">Installations</li>
                    <li id="header5" class="headerButtons" onclick="skinsheader()">Skins</li>
                    <li id="header6" class="headerButtons" onclick="patchnotesheader()">Patch Notes</li>
                </ul>
        </div>
        <div id="mods">
            <img class="modketplace-title" src="./assets/images/modketplace-title.png" alt="modketplace">
            <p class="bolded modssubtitle">Community mods for the EaglerForge Installation.</p>
            <div id="modsbox"></div>
        </div>
        <div id="faq">
            <p class="bolded faqtitle">Frequently Asked Questions</p>
            <p>Here are some frequently asked questions about BNALauncher.</p>
            <div id="faqbox"></div>
        </div>
        <div id="installations"><div id="installationsbox"></div></div>
        <div id="game-bg" style="background-image: url(./assets/images/web-edition.jpg);">
            <img id="game-title" src="./assets/images/web-title.png" alt="eaglercraft">
        </div>
        <div id="patchNotes">
            <div style="padding: 2vh 3vw 7vh;">
                <p class="bolded patchnotes-title">Versions</p>
                <div class="versionscontainer">
                    <input class="versionBox" type="checkbox" onchange="sortnote('game')" checked><p>Game Releases</p><input class="versionBox" type="checkbox" onchange="sortnote('site')" checked><p>Site Releases</p>
                </div>
                <hr>
                <div id="patchnotesbox"></div>
            </div>
        </div>
        <div id="gameSelection">
                <div class="dropdownSelector" onclick="dropdowntoggle()">
                    <div style="display: flex; gap: 1vw;">
                        <div class="centeredIcon">
                            <img id="gameicon" src="./assets/images/mc-icons/grass.png" style="width: 2.5vw;" />
                        </div>
                        <div class="versionText">
                            <p id="gametitle" class="bolded">Latest release</p>
                            <p id="gameversion">1.12.2-u2</p>
                        </div>
                        <div id="dropdownuparrow" class="centeredIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="dropdownIcon">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 9l6 6l6 -6" />
                            </svg>
                        </div>
                    </div>
                </div>
            <div id="dropdn" class="dropdownMenu" style="visibility: hidden;"></div>
            <a id="playbutton" href="javascript:void(0);" onClick="openPopup('https://bna-launcher.vercel.app/mc/1.12.2')"><div id="mainbutton" class="playButton"></div></a>
            <div class="username centeredIcon bolded"><p id="username">Generic User</p></div>
        </div>
    </div>
    <script src="/third-parties/mcl.js"></script>
    <script>
        function openPopup(url) {
			var mainGameLink = url;
		
            var width = 600;
            var height = 400;

            openApp('minecraft');
            }
        }
    </script>
</body>
</html>
  `,
  width: 700,
  height: 500
},
configurejava: {
  title: 'Configure Java',
  content: () => `
<p>Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
    at com.oracle.openjdk.config(MyApplication.java:0)
	at NaN(NULL)
</p>
<button class="button" id="cancel-saveas">Cancel</button>
  `,
  width: 700,
  height: 500
},
minecraft: {
  title: 'Minecraft',
  content: () => `
<iframe 
    id="siteFrame" 
    src="https://www.autistici.org/eaglercraft/play/modpack/explore/javascript/" 
    allow="autoplay; fullscreen; pointer-lock; microphone; camera; cross-origin-isolated" 
    sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-modals allow-popups" 
    style="display: block; width: 100vw; height: 100vh; border: none; position: fixed; top: 0; left: 0;"
    tabindex="0">
</iframe>

<!-- Provide focus to the game -->

<script>
    window.addEventListener('load', function () {
        var mainFrame = document.getElementById('gameFrame');
        // Force focus on load
        mainFrame.contentWindow.focus();
		mainFrame.src = mainGameLink;
        
        // Ensure focus remains inside if user clicks inside the frame
        document.body.addEventListener('click', function(e) {
            mainFrame.contentWindow.focus();
        }, false);
    });
</script>
  `,
  width: 700,
  height: 500
}
};

// =====================
// DOM references
// =====================
const desktop = document.getElementById('desktop');
const taskButtons = document.getElementById('task-buttons');
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const clockEl = document.getElementById('clock');
const contextMenu = document.getElementById('context-menu');
const dragBox = document.getElementById('drag-box');

// =====================
// Drag box logic
// =====================
const browserShortcut = document.getElementById('browser-shortcut');

let dragStartX = 0, dragStartY = 0;

// -----------------
// Single click select / deselect
// -----------------
browserShortcut.addEventListener('click', e => {
  e.stopPropagation(); // prevent desktop click from firing
  browserShortcut.classList.add('selected');
});

desktop.addEventListener('mousedown', e => {
  if (e.button !== 0 || e.target.closest('.window')) return;

  dragStartX = e.pageX;
  dragStartY = e.pageY;

  Object.assign(dragBox.style, {
    left: dragStartX + 'px',
    top: dragStartY + 'px',
    width: '0px',
    height: '0px',
    display: 'block'
  });

  // clear previous selection
  browserShortcut.classList.remove('selected');

  function onMouseMove(e) {
    const x = Math.min(e.pageX, dragStartX);
    const y = Math.min(e.pageY, dragStartY);
    const w = Math.abs(e.pageX - dragStartX);
    const h = Math.abs(e.pageY - dragStartY);

    Object.assign(dragBox.style, {
      left: x + 'px',
      top: y + 'px',
      width: w + 'px',
      height: h + 'px'
    });

    // Check overlap with browser shortcut
    const boxRect = dragBox.getBoundingClientRect();
    const iconRect = browserShortcut.getBoundingClientRect();

    const overlaps = !(
      boxRect.right < iconRect.left ||
      boxRect.left > iconRect.right ||
      boxRect.bottom < iconRect.top ||
      boxRect.top > iconRect.bottom
    );

    if (overlaps) {
      browserShortcut.classList.add('selected');
    } else {
      browserShortcut.classList.remove('selected');
    }
  }

  function onMouseUp() {
    dragBox.style.display = 'none';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});


let zTop = 10;
const windows = new Map();

// =====================
// Window manager
// =====================
function openApp(key) {
  const app = Apps[key]; if (!app) return;
  const id = `${key}-${Date.now()}`;

  const win = document.createElement('div');
  win.className = `window active opening ${app.className || ''}`;
  win.dataset.app = key;
  Object.assign(win.style, {
    left: '60px', top: '60px',
    width: (app.width || 360) + 'px',
    height: (app.height || 240) + 'px',
    zIndex: ++zTop
  });

  win.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-text">${app.title}</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">${app.content()}</div>
  `;

  desktop.appendChild(win);
  focusWindow(win);

  // remove 'opening' after animation
  win.addEventListener('animationend', () => win.classList.remove('opening'), { once: true });

  const [minBtn, maxBtn, closeBtn] = win.querySelectorAll('.title-bar-controls > button');
  minBtn.onclick = () => toggleMinimize(id);
  maxBtn.onclick = () => toggleMaximize(win);
  closeBtn.onclick = () => closeWindow(id);

  makeDraggable(win);
  win.addEventListener('mousedown', () => focusWindow(win));

  const btn = document.createElement('button');
  btn.className = 'button task-button';
  btn.textContent = app.title;
  btn.onclick = () => toggleMinimize(id);
  taskButtons.appendChild(btn);

  windows.set(id, { el: win, taskBtn: btn, minimized: false });
  
if (key === 'saveas') {
  const winBody = win.querySelector('.window-body');
  const saveBtn = win.querySelector('#confirm-saveas');
  const cancelBtn = win.querySelector('#cancel-saveas');

  saveBtn.onclick = () => {
    const filename = win.querySelector('#filename')?.value || 'untitled.txt';
    const filetype = win.querySelector('#filetype')?.value;
    alert(`Saving "${filename}" as ${filetype} to Downloads (simulated)`);
    const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
    if (id) closeWindow(id);
  };

  cancelBtn.onclick = () => {
    const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
    if (id) closeWindow(id);
  };
}
  
const body = win.querySelector('.window-body');
    if (key === 'notepad' && body) {
      body.classList.add('no-scrollbars');
    }
  
// if (key === 'winamp') {
//   const container = win.querySelector('#webamp-container');
//   const script = document.createElement('script');
//   script.src = "third-parties/webamp.bundle.min.mjs";
//   script.onload = () => {
//     const webamp = new Webamp();
//     webamp.renderWhenReady(container);
//   };
//   document.body.appendChild(script);
// }
  
if (key === 'properties') {
  const applyBtn = win.querySelector('#apply-properties');
  if (applyBtn) {
    applyBtn.onclick = () => {
      const wallpaper = win.querySelector('#wallpaper-select')?.value;
      const theme = win.querySelector('#theme-select')?.value;

      // --- Wallpaper ---
      switch (wallpaper) {
        case 'harmony':
          document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/0/0c/Img0_%28Windows_7_Starter%29.jpg/1280px-Img0_%28Windows_7_Starter%29.jpg') center/cover no-repeat";
          break;
        case 'mountains':
          document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/2/2f/Img9_%28Windows_7%29.jpg/1280px-Img9_%28Windows_7%29.jpg') center/cover no-repeat";
          break;
        case 'solid':
          document.body.style.background = "#004080";
          break;
        default:
          document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/5/50/Img0_%28Windows_7%29.jpg/1280px-Img0_%28Windows_7%29.jpg') center/cover no-repeat";
      }

      // --- Theme ---
      const themeLink = document.getElementById('theme-css');
      const startBtnImg = document.getElementById('start-btn-img');
      const startBtnText = document.getElementById('start-btn-text');
      if (themeLink) {
        if (theme === 'classic') {
          themeLink.href = "https://unpkg.com/98.css/dist/98.css";
          document.body.classList.add('classic-theme');
          startBtnImg.classList.add('classic-theme');
          startBtnText.classList.add('classic-theme');
        } else {
          themeLink.href = "https://unpkg.com/7.css/dist/7.css";
          document.body.classList.remove('classic-theme');
          startBtnImg.classList.remove('classic-theme');
          startBtnText.classList.remove('classic-theme');
        }
      }
    };
  }
}
function focusWindow(win) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  win.classList.add('active');
  win.style.zIndex = ++zTop;
}

function toggleMinimize(id) {
  const w = windows.get(id); if (!w) return;
  w.minimized = !w.minimized;
  w.el.classList.toggle('hidden', w.minimized);
  if (!w.minimized) focusWindow(w.el);
}

function toggleMaximize(el) {
  const max = el.dataset.maximized === 'true';
  if (!max) {
    el.dataset.prev = JSON.stringify({
      left: el.style.left, top: el.style.top,
      width: el.style.width, height: el.style.height
    });
    el.style.left = '0'; el.style.top = '0';
    el.style.width = desktop.clientWidth + 'px';
    el.style.height = (desktop.clientHeight - 36) + 'px';
    el.dataset.maximized = 'true';
  } else {
    const prev = JSON.parse(el.dataset.prev);
    Object.assign(el.style, prev);
    el.dataset.maximized = 'false';
  }
}

const taskBtnSelector = ".task-button";

function closeWindow(id) {
  const w = windows.get(id);
  if (!w) return;

  // Add the 'closing' class to trigger the animation
  w.el.classList.add('closing');
  
  // Ensure taskBtn is a reference to the actual DOM element
  const taskBtn = document.querySelector(taskBtnSelector);
  if (taskBtn) {
    // Trigger the shrinking animation on the task button
    taskBtn.classList.add('shrinking');
  }

  w.el.addEventListener('animationend', () => {
    w.el.remove();
    if (taskBtn) {
      taskBtn.remove();
    }
    windows.delete(id);
  }, { once: true });
}
window.closeWindow = closeWindow;


function makeDraggable(win) {
  const bar = win.querySelector('.title-bar');
  let sx, sy, sl, st;
  bar.addEventListener('mousedown', e => {
    if (win.dataset.maximized === 'true') return;
    sx = e.clientX; sy = e.clientY;
    sl = parseInt(win.style.left); st = parseInt(win.style.top);
    const move = e => {
      win.style.left = sl + (e.clientX - sx) + 'px';
      win.style.top  = st + (e.clientY - sy) + 'px';
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });
}
document.addEventListener('click', e => {
  const item = e.target.closest('[data-action]');
  if (!item) return;

  const action = item.dataset.action;
  const win = item.closest('.window');
  const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
  if (!id || !win) return;

  switch (action) {
    case 'new':
      const note = win.querySelector('#note');
      if (note) note.value = '';
      break;

    case 'open':
      alert('File access denied.');
      break;

    case 'save':
      openApp('saveas');
      break;

    case 'exit':
      closeWindow(id);
      break;

    default:
      alert(`Unknown action: ${action}`);
  }
});
}


// =====================
// Start menu
// =====================
function toggleStart(open) {
  // Use computed style to determine visibility (covers CSS and inline cases)
  const computedDisplay = window.getComputedStyle(startMenu).display;
  const isVisible = computedDisplay !== 'none';
  const show = (open !== undefined) ? open : !isVisible; // explicit check for undefined

  if (show && !isVisible) {
    startMenu.style.display = 'flex';
    startMenu.classList.remove('closing');
    startMenu.classList.add('opening');
    startMenu.addEventListener('animationend', () => {
      startMenu.classList.remove('opening');
    }, { once: true });
  } else if (!show && isVisible) {
    startMenu.classList.remove('opening');
    startMenu.classList.add('closing');
    startMenu.addEventListener('animationend', () => {
      startMenu.classList.remove('closing');
      // hide via inline style so computedStyle checks work consistently
      startMenu.style.display = 'none';
    }, { once: true });
  }
}

// Replace the previous .onclick assignment with a safer listener that toggles.
// Prevent default (anchor) and stop propagation so other global handlers don't immediately hide it.
startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleStart(); // toggle behaviour (no forced true) — click opens/closes
});

// Close Start menu when clicking outside of it (and not on the start button)
document.addEventListener('click', (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn && window.getComputedStyle(startMenu).display !== 'none') {
    toggleStart(false);
  }
});

// keep previous key handler for Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleStart(false);
});

// Launch apps from Start menu
startMenu.addEventListener('click', e => {
  const btn = e.target.closest('[data-launch]');
  if (btn) {
    openApp(btn.dataset.launch);
    toggleStart(false);
  }
});

// =====================
// Context menu
// =====================
let menuOpen = false;

function reloadAllImages() {
  const allElements = document.querySelectorAll('img, body');
  const originalSources = new Map();

  // Store original sources and backgrounds
  allElements.forEach(element => {
    if (element.tagName === 'IMG') {
      const src = element.src;
      if (src) {
        originalSources.set(element, src);
      }
    } else if (element.tagName === 'BODY' && element.style.backgroundImage) {
      const bgImage = element.style.backgroundImage;
      originalSources.set(element, bgImage);
    }
  });

  // Temporarily clear images to "nothing"
  allElements.forEach(element => {
    if (element.tagName === 'IMG') {
      // Use a tiny 1x1 transparent pixel to prevent browser errors with empty src
      element.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    } else if (element.tagName === 'BODY' && originalSources.has(element)) {
      element.style.backgroundImage = 'none';
    }
  });

  // Wait 0.05 seconds (50 milliseconds) and reload images
  setTimeout(() => {
    originalSources.forEach((originalSource, element) => {
      if (element.tagName === 'IMG') {
        const url = originalSource.split('?')[0];
        element.src = `${url}?t=${new Date().getTime()}`;
      } else if (element.tagName === 'BODY') {
        const urlMatch = /url\("?(.+?)"?\)/.exec(originalSource);
        if (urlMatch) {
          const url = urlMatch[1].split('?')[0];
          element.style.backgroundImage = `url("${url}?t=${new Date().getTime()}")`;
        }
      }
    });
  }, 100);
}

document.addEventListener('contextmenu', e => {
  e.preventDefault();
  positionMenu(e);
  contextMenu.classList.add('show');
  menuOpen = true;
});

document.addEventListener('click', e => {
  if (menuOpen && !contextMenu.contains(e.target)) {
    contextMenu.classList.remove('show');
    menuOpen = false;
  }
});

contextMenu.addEventListener('click', e => {
  const item = e.target.closest('[data-action]');
  if (!item) return;
  contextMenu.classList.remove('show');
  menuOpen = false;

  switch (item.dataset.action) {
    case 'new': openApp('notepad'); break;
    case 'refresh': reloadAllImages(); break;
    case 'properties': openApp('properties'); break;
  }
});

function positionMenu(e) {
  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = contextMenu;
  const x = Math.min(e.pageX, innerWidth - offsetWidth);
  const y = Math.min(e.pageY, innerHeight - offsetHeight);
  contextMenu.style.left = x + 'px';
  contextMenu.style.top = y + 'px';
}

// =====================
// Clock
// =====================
function tick() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    });
    const dateString = now.toLocaleDateString();
    clockEl.innerHTML = `${timeString} <br>${dateString}`;
    displayBatteryPercentage();
}

function displayBatteryPercentage() {
    navigator.getBattery().then(function(battery) {
        const batteryIconContainer = document.createElement('div'); // New div for battery icon
        const batteryIcon = document.createElement('span');
        batteryIcon.innerHTML = `<img id="battery-icon" style="width: 10px; height: 17px;" src="https://codehs.com/uploads/9239bc8660a18815599203767be82326">`;
        batteryIcon.title = `${Math.round(battery.level * 100)}% battery percentage`;
        
        const timeAndDateContainer = document.createElement('div');
        timeAndDateContainer.style.display = 'flex';
        timeAndDateContainer.style.alignItems = 'center';
        timeAndDateContainer.style.flexDirection = 'row'; // Align to the left
        
        const timeAndDateContent = document.createElement('div');
        timeAndDateContent.innerHTML = `${clockEl.innerHTML}`;
        
        batteryIconContainer.appendChild(batteryIcon); // Append battery icon to its own container
        timeAndDateContainer.appendChild(batteryIconContainer); // Append battery icon container to timeAndDateContainer
        timeAndDateContainer.appendChild(timeAndDateContent);
        
        clockEl.innerHTML = ''; // Clear previous content
        clockEl.appendChild(timeAndDateContainer); // Append time and date container
    });
}

tick();
setInterval(tick, 60000); // update every minute
openApp('welcome');
window.openApp = openApp;
window.windows = windows;
