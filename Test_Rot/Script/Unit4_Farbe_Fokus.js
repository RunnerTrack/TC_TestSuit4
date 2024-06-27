let dpsUtils=require("test_utils_240626");
function Informationen_DatumFelder_Durch_Funktionen() {
  let iframe=  Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let page = iframe.FindElement("#workflow");
  let feld="";// = page.FindElement("//input[@name='element21_formatted']");
//  let feld = page.FindElement("//input[@name='element69']");
//  let feld = page.FindElement("//select[@name='dropdow11']")  
//  let fld=["//input[@name='element21']","//input[@name='element21_formatted']","//input[@name='element12']","//input[@name='element13']","//input[@name='element9']"];

  let fld=["//input[@name='element21_formatted']","//input[@name='element45_formatted']","//input[@name='element45']","//input[@name='element21']"];
  fld=["//input[@name='element21_formatted']","//input[@name='element21']","//select[@name='dropdow15']","//select[@name='element44_formatted']"]; 
//  let fld=["//input[@name='element21_formatted']"];
//  let fld=["//input[@name='element62']"];

  let focus=dpsUtils.getFocusedElement(iframe);
  Log.Message("focus: " + focus[0]+"(TabIndex:"+focus[1]+")");    
  Log.Message("");
  for (let i=0;i<fld.length;i++){
    feld=page.WaitElement(fld[i],500);
  let exists=dpsUtils.isExists(feld);
  
  if (!exists)
  {
        Log.Message("- . - . - . - . - . - . - . - . -");
        Log.Message("Doesn't exist:      <"+fld[i]+">");
        Log.Message("- . - . - . - . - . - . - . - . -");
    }else{
  
  let textColorName = dpsUtils.getTextColorName(feld,page);
  let backgroundColorName =dpsUtils.getBackgroundColorName(feld,page);
  let textColorCode = dpsUtils.getTextColorCode(feld,page);
  let backgroundColorCode =dpsUtils.getBackgroundColorCode(feld,page);
  
  let readOnly=dpsUtils.isReadOnly(feld);
  let hidden=dpsUtils.isHidden(feld);
  let visibleOnScreen=dpsUtils.isVisibleOnScreen(feld);
  let enAbled=dpsUtils.isEnabled(feld);
  let tabIndex=dpsUtils.getTabIndex(feld);
  let text=dpsUtils.getText(feld);
  let objectName=dpsUtils.getObjectName(feld);
  let objectType=dpsUtils.getObjectType(feld);
  let maske=dpsUtils.getMask(feld,false);
      let maxLength=-2;
  if (objectType=="TextBox")
    maxLength=dpsUtils.getMaxLength(feld);
  

  if (objectType!="Textbox")
    text="";
    Log.Message("* * * Features of : " + objectName+"("+
    objectType+") * * *");
    Log.Message("Value : " + text);
    Log.Message("Maske : " + maske);
    Log.Message("textColorName: " + textColorName);
    Log.Message("backgroundColorName: " + backgroundColorName);
    Log.Message("exists: " + exists);
    Log.Message("readOnly: " + readOnly);
    Log.Message("hidden: " + hidden);
    Log.Message("visibleOnScreen: " + visibleOnScreen);
    Log.Message("*enAbled: " + enAbled);
    if (objectType=="TextBox")
      Log.Message("MaxLength: " + maxLength);
    Log.Message("tabIndex: " + tabIndex);
    }
    
}

}

function Informationen_DatumFelder() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
 
  let textColor = page.contentDocument.defaultView.getComputedStyle(feld).color;
  let backgroundColor = page.contentDocument.defaultView.getComputedStyle(feld).backgroundColor;

  feld = page.FindElement("//input[@name='element21_formatted']");
  weiterigeInfo(feld,page);
  
  feld = page.FindElement("//input[@name='element22_formatted']");
  weiterigeInfo(feld,page);

      feld = page.WaitElement("//button[@name='button016']",1000); 
      if (IsExists(feld,page))
      //if (feld!=null && feld.Exists)
      {
        weiterigeInfo(feld,page);
      }else {
        Log.Message("Nach eine Sekunde nicht gefunden");
      }
  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let iframeDocument = iframe.contentDocument;
  let activeElement = iframeDocument.activeElement.contentWindow.document.activeElement;

  let focusedElementName = activeElement.getAttribute("name");
  let focusedElementTabIndex = activeElement.tabIndex;
  
   Log.Message(`Focused: ${focusedElementName} Tab index: ${focusedElementTabIndex}`);

   
}

function Speicher_Knopf_Existiert() {
  //try{
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  
  let feld = "//button[@name='button016']"; // Speicher
  let result=page.WaitElement("//button[@name='button016']",250);
  if (result!=null && result.Exists){
 Log.Message("Das Element 'button016' existiert.");
 let isHidden=(result.offsetWidth===0 && result.offsetHeight===0) || result.style.display==='none' || result.style.visibility==='hidden';
 Log.Message("Hidden: "+isHidden);
 Log.Message("Text: "+result.innerText);
 Log.Message("Enabled "+result.Enabled);
 
  } else{
    Log.Message("Das Element 'button016' existiert nicht.");
  }
}

function AlleButtonNamenAnzeigen() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  
  // Alle Button-Elemente auf der Seite finden
  let buttons = page.FindElements("//button");

  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      let buttonName = button.getAttribute("name") || "Kein Name";
      let isHidden=(button.offsetWidth===0 && button.offsetHeight===0) || button.style.display==='none' || button.style.visibility==='hidden';

      textColor = page.contentDocument.defaultView.getComputedStyle(button).color;
      backgroundColor = page.contentDocument.defaultView.getComputedStyle(button).backgroundColor;
      let hasFocus = page.contentDocument.activeElement === button;
      Log.Message("Button " + (i + 1) + ": " + buttonName+" ("+button.innerText+") "+"  Hidden: "+isHidden+"  Enabled: "+button.Enabled+" Color/Background : "+textColor+"/"+backgroundColor);
    }
  } else {
    Log.Message("Keine Buttons gefunden.");
  }
}

function AlleDropDownNamenAnzeigen() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  
  // Alle Button-Elemente auf der Seite finden
  let buttons = page.FindElements("//Select");

  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      let buttonName = button.getAttribute("name") || "Kein Name";
      let isHidden=(button.offsetWidth===0 && button.offsetHeight===0) || button.style.display==='none' || button.style.visibility==='hidden';

      textColor = page.contentDocument.defaultView.getComputedStyle(button).color;
      backgroundColor = page.contentDocument.defaultView.getComputedStyle(button).backgroundColor;
      let hasFocus = page.contentDocument.activeElement === button;
      Log.Message("Button " + (i + 1) + ": " + buttonName+" ("+button.innerText+") "+"  Hidden: "+isHidden+"  Enabled: "+button.Enabled+" Color/Background : "+textColor+"/"+backgroundColor);
    }
  } else {
    Log.Message("Keine DropDown gefunden.");
  }
}

function AlleTextBoxNamenAnzeigen() {
  
    let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

    // Alle Textbox-Elemente auf der Seite finden
    let textboxes = page.FindElements("//input[@type='text']");

    if (textboxes.length > 0) {
        for (let i = 0; i < textboxes.length; i++) {
            let textbox = textboxes[i];
            let textboxName = textbox.getAttribute("name") || "Kein Name";
            let isHidden = (textbox.offsetWidth === 0 && textbox.offsetHeight === 0) || textbox.style.display === 'none' || textbox.style.visibility === 'hidden';
            textColor = page.contentDocument.defaultView.getComputedStyle(textbox).color;
            backgroundColor = page.contentDocument.defaultView.getComputedStyle(textbox).backgroundColor;
//            let hasFocus = page.contentDocument.activeElement === textbox;
            let readonly=textbox.readOnly;

            
            Log.Message("Readonly: "+readonly+"Textbox " + (i + 1) + ": " + textboxName + " (" + textbox.value + ") " + " Hidden: " + isHidden + " Enabled: " + textbox.Enabled + " Color/Background : " + textColor + "/" + backgroundColor);
        }
    } else {
        Log.Message("Keine Textboxen gefunden.");
    }
}

function FokusiertElement_Textboxen() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let iframeDocument = iframe.contentDocument;
  let activeElement = iframeDocument.activeElement.contentWindow.document.activeElement;

  let focusedElementName = activeElement.getAttribute("name");
  let focusedElementTabIndex = activeElement.tabIndex;

textColor = page.contentDocument.defaultView.getComputedStyle(activeElement).color;
backgroundColor = page.contentDocument.defaultView.getComputedStyle(activeElement).backgroundColor;
textColorName =dpsUtils.rgbToColorName(textColor);
backgroundColorName =dpsUtils.rgbToColorName(backgroundColor);

 Log.Message(`Focused: ${focusedElementName} Tab index: ${focusedElementTabIndex} Text/Background color: ${textColorName}/${backgroundColorName}`);
}

function getComputedStyle(element, property) {
  let style = element.ownerDocument.defaultView.getComputedStyle(element, null);
  return style.getPropertyValue(property);
}

function weiterigeInfo(felder,pager){
    if (!felder || !felder.Exists) {
    Log.Message("Element existiert nicht oder ist nicht vorhanden.");
    return;
  }
  aqUtils.Delay(100);
  let isHidden = (felder.offsetWidth === 0 && felder.offsetHeight === 0) || felder.style.display === 'none' || felder.style.visibility === 'hidden';
  let onscreen = felder.VisibleOnScreen;
  let hasFocus = pager.contentDocument.activeElement === felder;
  let tabIndex = felder.tabIndex;
  let textColor = pager.contentDocument.defaultView.getComputedStyle(felder).color;
  let backgroundColor = pager.contentDocument.defaultView.getComputedStyle(felder).backgroundColor;
  let textColorName = dpsUtils.rgbToColorName(textColor);
  let backgroundColorName =dpsUtils.rgbToColorName(backgroundColor);

  Log.Message(`
    Hidden: ${isHidden}
    VisibleOnScreen: ${onscreen}
    Has Focus: ${hasFocus}
    TabIndex: ${tabIndex}
    Text: ${felder.Text}
    Text Color: ${textColor}
    Background Color: ${backgroundColor}
    Text Color Name: ${textColorName}
    Background Color Name: ${backgroundColorName}
  `);
}

//*************************************
function getMask_moved_to_dps_utils(element,writeAll) {
  // Finde das übergeordnete DIV-Element
  let parentDiv = element.parent;
  let maskeName=element.className;
  // Suche nach dem Script-Tag innerhalb des DIV
  let scriptElements = parentDiv.FindElements("//script");
if (writeAll)
  Log.Message("Find Script+"+scriptElements);

//  scriptElements = parentDiv.getElementsByTagName("script");
//  Log.Message("By Tag Name Script+"+scriptElements);

  for (let i = 0; i < scriptElements.length; i++) {
    let scriptElement = scriptElements[i];
    // Extrahiere den Inhalt des Script-Tags
    let scriptContent = scriptElement.innerText;
    if (writeAll)
    Log.Message("ScriptContent: "+scriptContent);
        
    if (scriptContent.indexOf("mask")!==-1){
      if (writeAll)
      Log.Message("Masks: "+scriptContent);
    if (scriptContent.indexOf(maskeName)!==-1){
      if (writeAll)
      Log.Message("Mask("+maskeName+"): "+scriptContent);
      let maskMatch = scriptContent.match(/mask\s*:\s*['"]([^'"]+)['"]/); 
      if (maskMatch && maskMatch[1]) {
        return maskMatch[1];
      }
      
    }
      
    }
  }
  
  // Wenn keine Maske gefunden wurde, gib null zurück
  return null;
}
function ReadMasks() {
  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let page = iframe.FindElement("#workflow");
//  let feldNames=["element45_formatted","element81_formatted","element36_formatted"];
//  let feldNames=["element36_formatted"];
  let feldNames=["element44_formatted"];
  for (let i=0;i<(feldNames.length);i++){
  let feldName = feldNames[i];
  let feld = page.WaitElement("//input[@name='" + feldName + "']",250);
  
  if (feld.Exists) {
    try {
      let mask = getMask(feld,false);
      if (mask) {
        Log.Message("Maske für " + feldName + ": " + mask);
      } else {
        Log.Message("Keine Maske für " + feldName + " gefunden");
      }
      
      // Hier können Sie weitere Informationen über das Feld ausgeben
      Log.Message("Wert: " + feld.Text);
      Log.Message("ReadOnly: " + feld.ReadOnly);
      Log.Message("Enabled: " + feld.Enabled);
      // ... weitere Eigenschaften nach Bedarf
    } catch (e) {
      Log.Error("Fehler beim Verarbeiten des Feldes " + feldName + ": " + e.message);
    }
  } else {
    Log.Warning("Feld " + feldName + " nicht gefunden");
  }
 }
}

function Informationen_DatumFelder_Durch_Funktionen5() {
  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let page = iframe.FindElement("#workflow");
  
  let feldName = "element45_formatted";
  let feld = page.FindElement("//input[@name='" + feldName + "']");
  
  
  }

function Informationen_DatumFelder_Durch_Funktionen2() {
  let iframe=  Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let page = iframe.FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
  let mFeld = page.FindElements("//input[starts-with(@name,'element')]");
//   mFeld = page.WaitElement(("//input[starts-with(@name,'element')]"),250);
  let msg="# of Edit: ${mFeld.length}";
  msg=mFeld.length;
  Log.Message("# of Edit: ${mFeld.length}"+msg);
//  let feld = page.FindElement("//input[@name='element69']");
//  let feld = page.FindElement("//select[@name='dropdow11']")  
//  let fld=["//input[@name='element21_formatted']","//input[@name='element12']","//input[@name='element13']","//input[@name='element9']"];
  let fld=["//input[@name='element21_formatted']","//input[@name='element12']","//input[@name='element13']","//input[@name='element9']"];
  for (let i=0;i<mFeld.length;i++){
//    feld=page.FindElement(fld[i]);
    feld=mFeld[i];
  page.WaitElement(feld.Name,100);
  let textColorName = dpsUtils.getTextColorName(feld,page);
  let backgroundColorName =dpsUtils.getBackgroundColorName(feld,page);
  let textColorCode = dpsUtils.getTextColorCode(feld,page);
                 let backgroundColorCode =dpsUtils.getBackgroundColorCode(feld,page);
  let exists=dpsUtils.isExists(feld);
  let focus=dpsUtils.getFocusedElement(iframe);
  let readOnly=dpsUtils.isReadOnly(feld);
  let hidden=dpsUtils.isHidden(feld);
  let visibleOnScreen=dpsUtils.isVisibleOnScreen(feld);
  let enAbled=dpsUtils.isEnabled(feld);
  let tabIndex=dpsUtils.getTabIndex(feld);
  let text=dpsUtils.getText(feld);
  let objectName=dpsUtils.getObjectName(feld);
  let objectType=dpsUtils.getObjectType(feld);
  if (objectType!="Textbox")
    text="";
    Log.Message("* * * Features of : " + objectName+"("+
    objectType+") * * *");
    Log.Message("Value : " + text);
    Log.Message("textColorName: " + textColorName+ "("+textColorCode+")");
    Log.Message("backgroundColorName: " + backgroundColorName+ "("+backgroundColorCode+")");
    Log.Message("exists: " + exists);
    Log.Message("focus: " + focus[0]+"(TabIndex:"+focus[1]+")");
    Log.Message("readOnly: " + readOnly);
    Log.Message("*hidden: " + hidden);
    Log.Message("visibleOnScreen: " + visibleOnScreen);
    Log.Message("*enAbled: " + enAbled);
    Log.Message("tabIndex: " + tabIndex);
}
  let feld2=page.WaitElement("//button[@name='button016']",1000);
  Log.Message("button016:"+dpsUtils.isExists(feld2) );
  //Log.Message("text21:"+dpsUtils.isExists(feld,page) );
  
}



function Informationen_DatumFelder3() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
 
  let textColor = page.contentDocument.defaultView.getComputedStyle(feld).color;
  let backgroundColor = page.contentDocument.defaultView.getComputedStyle(feld).backgroundColor;

  feld = page.FindElement("//input[@name='element21_formatted']");
  weiterigeInfo(feld,page);
  
  feld = page.FindElement("//input[@name='element22_formatted']");
  weiterigeInfo(feld,page);

feld = page.WaitElement("//button[@name='button016']",1000); 
if (IsExists(feld,page))
//if (feld!=null && feld.Exists)
{
weiterigeInfo(feld,page);
}else {
  Log.Message("Nach eine Sekunde nicht gefunden");
}

   
}


function Test1()
{
  Browsers.Item(btEdge).Run("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_get");
  let browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  let page = browser.Page("https://www.w3schools.com/jsref/tryit.asp*");
  page.Wait();
  page.FindElement("//div[@id='textareacontainer']//div[5]/pre[7]//span[11]").Click();
  page.FindElement("//div[@id='textareawrapper']//div/textarea").Keys(" style=\"backgrouk[BS]nd_color:ligt[BS]htgraz[BS]y;color:red\"");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#runbtn"), "hidden", cmpEqual, false);
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#runbtn"), "innerText", cmpEqual, "Run ❯");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#runbtn"), "style", cmpEqual, "[CSSStyleDeclaration]");
  Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#runbtn").Click();
  Delay(200);
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText").attributes, "style", cmpEqual, "background_color:lightgray;color:red");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText").parentNode, "bgColor", cmpEqual, "");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText").previousElementSibling, "hidden", cmpEqual, false);
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText").previousElementSibling, "innerText", cmpEqual, "A demonstration of how to access a Text Field");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText").style, "cssText", cmpEqual, "color: red;");
  aqObject.CheckProperty(Sys.Browser().Page("https://www.w3schools.com/jsref/tryit.asp*").FindElement("#iframeResult").FindElement("#myText"), "value", cmpContains, "text");
  page.FindElement("#iframeResult").FindElement("button[.='Try it']").ClickButton();
}

function Farbe(){
  
let page=Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
let feld=page.FindElement("//input[@name='element21_formatted']");
Log.Message("Inhalt:"+feld.Text);
if(feld.hasAttribute("bgcolor")){
  Log.Message("Farbe:"+feld.getAttribute("bgcolor"));
}else{
  Log.Message("Es hat kein color Attribute");
}
Log.Message("background_color"+feld.hasAttribute("background_color"));
Log.Message("color"+feld.hasAttribute("color"));
Log.Message("style"+feld.hasAttribute("style"));
//onfocus
Log.Message("tabindex"+feld.getAttribute("tabIndex"));
Log.Message("Visible"+feld.Visible);
Log.Message("value"+feld.Value);
Log.Message("background"+feld.hasAttribute("background"));
}

function Farbe2_del() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
  Log.Message("Inhalt:" + feld.Text);

  let styles = feld.getStyle();
  Log.Message("Schriftfarbe: " + styles.color);
  Log.Message("Hintergrundfarbe: " + styles.backgroundColor);
  Log.Message("Schriftgröße: " + styles.fontSize);
  Log.Message("Sichtbarkeit: " + styles.visibility);
  // Weitere CSS-Eigenschaften nach Bedarf
}

function Farbe3_del() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
  
  Log.Message("Inhalt:" + feld.Text);
  
  Log.Message("Farbe:" + feld.ownerDocument.bgcolor);
  
  Log.Message("background_color: " + feld.hasAttribute("background_color"));
  Log.Message("color: " + feld.hasAttribute("color"));
  Log.Message("style: " + feld.hasAttribute("style"));
  Log.Message("tabindex: " + feld.hasAttribute("tabindex"));
  
  if (feld.hasAttribute("tabindex")) {
    let tab = feld.getAttribute("tabindex");
    Log.Message("tabindex value: " + tab);
  }

  Log.Message("value: " + feld.hasAttribute("value"));
  Log.Message("background: " + feld.hasAttribute("background"));
}
function Farbe4_del() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
  
  Log.Message("Inhalt: " + feld.Text);
  
  if (feld.hasAttribute("bgcolor")) {
    Log.Message("Farbe: " + feld.getAttribute("bgcolor"));
  } else {
    Log.Message("Es hat kein color Attribute");
  }
  
  Log.Message("background_color: " + feld.hasAttribute("background_color"));
  Log.Message("color: " + feld.hasAttribute("color"));
  Log.Message("style: " + feld.hasAttribute("style"));
  Log.Message("tabindex: " + feld.hasAttribute("tabindex"));
  
  if (feld.hasAttribute("tabindex")) {
    let tab = feld.getAttribute("tabindex");
    Log.Message("tabindex value: " + tab);
  }

  Log.Message("value: " + feld.hasAttribute("value"));
  Log.Message("background: " + feld.hasAttribute("background"));
  
  // Read CSS properties for color and background-color
  let textColor = feld.getComputedStyle("color");
  let backgroundColor = feld.getComputedStyle().backgroundColor;
  
  Log.Message("Text Color: " + textColor);
  Log.Message("Background Color: " + backgroundColor);
}
function Farbe5() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let feld = page.FindElement("//input[@name='element21_formatted']");
  
  Log.Message("Inhalt: " + feld.Text);
  Log.Message("Name:"+feld.name);

  Log.Message("Has tAbInDeX: " + feld.hasAttribute("tAbInDeX"));
  
  if (feld.hasAttribute("tabindex")) {
    let tab = feld.getAttribute("tabindex");
    Log.Message("tabindex value: " + tab);
  }

  let textColor = page.contentDocument.defaultView.getComputedStyle(feld).color;
let backgroundColor = page.contentDocument.defaultView.getComputedStyle(feld).backgroundColor;
  Log.Message("Text Color: " + textColor+"("+rgbToColorName(textColor)+")");
  Log.Message("Background Color: " + backgroundColor+"("+rgbToColorName(backgroundColor)+")");
}



function weiterigeInfo2(felder,pager){

  let isHidden = (felder.offsetWidth === 0 && feld.offsetHeight === 0) || felder.style.display === 'none' || felder.style.visibility === 'hidden';
  Log.Message("Hidden: " + isHidden);

  let onscreen= felder.VisibleOnScreen;
  Log.Message("VisibleOnScreen: "+onscreen);
  
  let hasFocus = pager.contentDocument.activeElement === felder;
  Log.Message("Has Focus: " + hasFocus);

  let tabIndex = felder.tabIndex;
  Log.Message("TabIndex: " + tabIndex);  

  textColor = pager.contentDocument.defaultView.getComputedStyle(felder).color;
  backgroundColor = pager.contentDocument.defaultView.getComputedStyle(felder).backgroundColor;
  
  Log.Message("Text: " + felder.Text);
  Log.Message("Text Color: " + textColor);
  Log.Message("Background Color: " + backgroundColor);

  textColorName = rgbToColorName(textColor);
  backgroundColorName = rgbToColorName(backgroundColor);
  
  Log.Message("Text Color Name: " + textColorName);
  Log.Message("Background Color Name: " + backgroundColorName);
  
  
}

//***
function AnalyzeTextInputs2() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
let iframeDocument = iframe.contentDocument;
let hasFocusMain = iframeDocument.activeElement;  
let focusedElement0=hasFocusMain.contentWindow.document.activeElement;
let focusedElement=focusedElement0.getAttribute("name");
let focusedElementTab=hasFocusMain.contentWindow.document.activeElement.tabIndex;

textColor = page.contentDocument.defaultView.getComputedStyle(focusedElement0).color;
backgroundColor = page.contentDocument.defaultView.getComputedStyle(focusedElement0).backgroundColor;
textColorName = rgbToColorName(textColor);
backgroundColorName = rgbToColorName(backgroundColor);


Log.Message("Focused: "+focusedElement+" Tab index: "+focusedElementTab+"  Text/Background color: "+textColorName+"/"+backgroundColorName);
  // Find all input elements with type="text"
  let textInputs = page.FindElements("//input[@type='text']");

  if (textInputs.length > 0) {
    for (let i = 0; i < textInputs.length; i++) {
      let input = textInputs[i];
      let isThisHasFocus = (focusedElementTab===input.tabIndex);   
      if (focusedElementTab==input.tabIndex){
        Log.Message("TabIndex found:"+focusedElementTab);
      }
      let bgcolor=input.getAttribute("bgcolor");
        textColor = page.contentDocument.defaultView.getComputedStyle(input).color;
        backgroundColor = page.contentDocument.defaultView.getComputedStyle(input).backgroundColor;

        textColorName = rgbToColorName(textColor);
        backgroundColorName = rgbToColorName(backgroundColor);
      
      
      Log.Message("Text Input " + (i + 1) + ": " + input.Text + " (" + input.getAttribute("name")+" Tab Index: "+ input.tabIndex + ") Text/Background color: "+textColor+"/"+backgroundColor);  
    }
  } else {
    Log.Message("No text inputs found.");
  }
}
//***end

function AnalyzeTextInputs3() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let iframeDocument = iframe.contentDocument;
  let hasFocusMain = iframeDocument.activeElement;
  let focusedElement0 = hasFocusMain.contentWindow.document.activeElement;
  let focusedElement = hasFocusMain.contentWindow.document.activeElement.name;
  let focusedElementTab = hasFocusMain.contentWindow.document.activeElement.tabIndex;

  let textColor = page.contentDocument.defaultView.getComputedStyle(focusedElement0).color;
  let backgroundColor = page.contentDocument.defaultView.getComputedStyle(focusedElement0).backgroundColor;
  let textColorName = rgbToColorName(textColor);
  let backgroundColorName = rgbToColorName(backgroundColor);

  Log.Message("Focused: " + focusedElement + " Tab index: " + focusedElementTab + " Text/Background color: " + textColorName + "/" + backgroundColorName);

  // Find all input elements with type="text"
  let textInputs = page.FindElements("//input[@type='text']");

  if (textInputs.length > 0) {
    for (let i = 0; i < textInputs.length; i++) {
      let input = textInputs[i];
      let isThisHasFocus = (focusedElementTab === input.tabIndex);
      if (isThisHasFocus) {
        Log.Message("TabIndex found: " + focusedElementTab);
      }

      textColor = page.contentDocument.defaultView.getComputedStyle(input).color;
      backgroundColor = page.contentDocument.defaultView.getComputedStyle(input).backgroundColor;

      textColorName = rgbToColorName(textColor);
      backgroundColorName = rgbToColorName(backgroundColor);

      Log.Message("Text Input " + (i + 1) + ": " + input.Text + " (" + input.getAttribute("name") + " Tab Index: " + input.tabIndex + ") Text/Background color: " + textColorName + "/" + backgroundColorName);
    }
  } else {
    Log.Message("No text inputs found.");
  }
}

function AnalyzeTextInputs() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let iframe = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let iframeDocument = iframe.contentDocument;
  let focusedElement = iframeDocument.activeElement;

  let focusedElementColor = getComputedStyle(focusedElement, "color");
  let focusedElementBackgroundColor = getComputedStyle(focusedElement, "background-color");

  Log.Message("Focused: " + focusedElement.name + " Text/Background color: " + focusedElementColor + "/" + focusedElementBackgroundColor);

  let textInputs = page.FindElements("//input[@type='text']");

  if (textInputs.length > 0) {
    for (let i = 0; i < textInputs.length; i++) {
      let input = textInputs[i];
      let inputColor = getComputedStyle(input, "color");
      let inputBackgroundColor = getComputedStyle(input, "background-color");

      Log.Message("Text Input " + (i + 1) + ": " + input.Text + " (" + input.getAttribute("name") + ") Text/Background color: " + inputColor + "/" + inputBackgroundColor);
    }
  } else {
    Log.Message("No text inputs found.");
  }
}

function AlleElementeAnzeigen() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  // Finden Sie alle Elemente innerhalb des Containers
  let elements = page.FindElements("*");

  // Iterieren Sie durch alle gefundenen Elemente
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let tagName = element.tagName.toLowerCase();
    let elementType = "";

    // Bestimmen Sie den Typ des Elements und relevante Attribute/Texte
    switch (tagName) {
      case "button":
        elementType = "Button";
        Log.Message("Element " + (i + 1) + " (Button):");
        Log.Message("Name: " + (element.getAttribute("name") ? element.getAttribute("name") : "Kein Name"));
        Log.Message("Text: " + (element.contentText || element.innerText));
        break;

      case "select":
        elementType = "Select";
        Log.Message("Element " + (i + 1) + " (Select):");
        Log.Message("Name: " + (element.getAttribute("name") ? element.getAttribute("name") : "Kein Name"));
       //kg Log.Message("Optionen: " + getSelectOptions(element));
        break;

      case "input":
        let inputType = element.getAttribute("type") ? element.getAttribute("type").toLowerCase() : "text";
        elementType = "Input (" + inputType + ")";
        Log.Message("Element " + (i + 1) + " (Input):");
        Log.Message("Name: " + (element.getAttribute("name") ? element.getAttribute("name") : "Kein Name"));
        Log.Message("Value: " + element.value);
        break;

      case "textarea":
        elementType = "Textarea";
        Log.Message("Element " + (i + 1) + " (Textarea):");
        Log.Message("Name: " + (element.getAttribute("name") ? element.getAttribute("name") : "Kein Name"));
        Log.Message("Text: " + element.value);
        break;

      // Fügen Sie hier weitere Fälle für andere Elementtypen hinzu
      default:
        elementType = "Andere (" + tagName + ")";
        Log.Message("Element " + (i + 1) + " (Andere):");
        Log.Message("Tag: " + tagName);
        Log.Message("Inhalt: " + (element.contentText || element.innerText));
        break;
    }
  }

  function getSelectOptions(selectElement) {
    let optionList = [];
    if (selectElement && selectElement.options) {
      let options = selectElement.options;
      for (let j = 0; j < options.length; j++) {
        optionList.push(options[j].text || options[j].innerText || "Kein Text");
      }
    } else {
      optionList.push("Keine Optionen gefunden");
    }
    return optionList.join(", ");
  }
}
//********
function Informationen_DatumFelder2() {
  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  // Informationen für das erste Element erfassen
  let feld1 = page.FindElement("//input[@name='element21_formatted']");
  weiterigeInfo2(feld1, page);

  // Informationen für das zweite Element erfassen
  let feld2 = page.FindElement("//input[@name='element22_formatted']");
  weiterigeInfo3(feld2, page);

  // Informationen für das Button-Element erfassen
  let button = page.WaitElement("//button[@name='button016']", 1000); 
  if (IsExists2(button, page)) {
    weiterigeInfo3(button, page);
  } else {
    Log.Message("Nach einer Sekunde nicht gefunden");
  }
}

function weiterigeInfo3(felder, pager) {
  // Sicherstellen, dass das Element vorhanden ist
  if (!felder || !felder.Exists) {
    Log.Message("Element existiert nicht oder ist nicht vorhanden.");
    return;
  }

  // Fokus überprüfen, nachdem eine kurze Wartezeit hinzugefügt wurde
  aqUtils.Delay(100); // Kurze Wartezeit einfügen, um den Fokusstatus korrekt zu erfassen
  let isHidden = (felder.offsetWidth === 0 && felder.offsetHeight === 0) || felder.style.display === 'none' || felder.style.visibility === 'hidden';
  let onscreen = felder.VisibleOnScreen;
  let hasFocus = pager.contentDocument.activeElement === felder;
  let tabIndex = felder.tabIndex;
  let textColor = pager.contentDocument.defaultView.getComputedStyle(felder).color;
  let backgroundColor = pager.contentDocument.defaultView.getComputedStyle(felder).backgroundColor;
  let textColorName = rgbToColorName2(textColor);
  let backgroundColorName = rgbToColorName2(backgroundColor);

  Log.Message(`
    Hidden: ${isHidden}
    VisibleOnScreen: ${onscreen}
    Has Focus: ${hasFocus}
    TabIndex: ${tabIndex}
    Text: ${felder.Text}
    Text Color: ${textColor}
    Background Color: ${backgroundColor}
    Text Color Name: ${textColorName}
    Background Color Name: ${backgroundColorName}
  `);
}

function rgbToColorName2(rgb) {
  const colors = {
    "rgb(0, 0, 0)": "Black",
    "rgb(255, 255, 255)": "White",
    "rgb(255, 0, 0)": "Red",
    "rgb(0, 255, 0)": "Green",
    "rgb(0, 0, 255)": "Blue"
    // Weitere Farben können hier hinzugefügt werden
  };

  return colors[rgb] || rgb;
}

function IsExists2(element, pager) {
  return element && element.Exists;
}
