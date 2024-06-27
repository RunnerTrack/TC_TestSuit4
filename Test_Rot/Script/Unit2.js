function Test1(){
  
const maxAttempts = 100;
const delay = 500; // Millisekunden

  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  // Finden Sie die Elemente
  let element1 = page.FindElement("//input[@name='element21_formatted']");
  let element2 = page.FindElement("//input[@name='element22_formatted']");
  element1.Click();
  element1.SetText("08.06.2014");

for (let attempt = 0; attempt < maxAttempts; attempt++) {
  let focusedElement = page.ownerDocument.activeElement;
  
  if (focusedElement === element1) {
    Log.Message("Element 1 hat den Fokus.");
    break;
  } else if (focusedElement === element2) {
    Log.Message("Element 2 hat den Fokus.");
    break;
  } else {
    Log.Message("Keines der Elemente hat den Fokus. Versuche es erneut...");
    Delay(delay);
  }
}

}
function Test2() {
  Log.Message("Starting...");

  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  // Finden Sie die Elemente
  let element1 = page.FindElement("//input[@name='element21_formatted']");
  let element2 = page.FindElement("//input[@name='element22_formatted']");
  element1.Click();
  element1.SetText("08.06.2014");

  // Überprüfen Sie das aktuell fokussierte Element
  let focusedElement = page.ownerDocument.activeElement;

  if (focusedElement === element1) {
    Log.Message("Element 1 (element21_formatted) hat den Fokus.");
  } else if (focusedElement === element2) {
    Log.Message("Element 2 (element22_formatted) hat den Fokus.");
  } else {
    Log.Message("Keines der Elemente hat den Fokus.");
  }
}

function Test3() {
  Log.Message("Starting...");

  // Warten Sie, bis die Seite vollständig geladen ist (mit einem Timeout von 30 Sekunden)
 // Sys.Browser().WaitForPage("", 30000);

  let page = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");

  // Finden Sie die Elemente
  let element1 = page.FindElement("//input[@name='element21_formatted']");
  let element2 = page.FindElement("//input[@name='element22_formatted']");
  element1.Click();
  element1.SetText("08.06.2014");
  // Überprüfen Sie den Fokus des ersten Elements
  Log.Message("Element 1 (element21_formatted):");
  Log.Message("Font Size: " + getStyle(element1, "Font-size"));
  Log.Message("Color: " + getStyle(element1, "Color"));
  Log.Message("Background Color: " + getStyle(element1, "Background-color"));
  Log.Message("Visibility: " + getStyle(element1, "visibility"));
  Log.Message("hasFocus: " + hasFocus(element1)); // Verwenden Sie hasFocus

  // Überprüfen Sie den Fokus des zweiten Elements
  Log.Message("Element 2 (element22_formatted):");
  Log.Message("Font Size: " + getStyle(element2, "Font-size"));
  Log.Message("Color: " + getStyle(element2, "Color"));
  Log.Message("Background Color: " + getStyle(element2, "Background-color"));
  Log.Message("Visibility: " + getStyle(element2, "visibility"));
  Log.Message("hasFocus: " + hasFocus(element2)); // Verwenden Sie hasFocus
}

//-----------------------------------------------------------------------------

// From: http://support.smartbear.com/viewarticle/62849/
function getStyle(element, styleProp) {
  var document, style;
  var result;

  document = element.ownerDocument;

  if (aqObject.IsSupported(document, "defaultView")) {
    // Internet Explorer 9+, Firefox, Chrome, Safari, Opera
    style = document.defaultView.getComputedStyle(element, "");
    if (aqObject.IsSupported(style, styleProp))
      result = eval(aqString.Format("style.%s", styleProp));
    else if (aqObject.IsSupported(style, "getPropertyValue"))
      result = style.getPropertyValue(styleProp);
    else
      Log.Error(aqString.Format("%s element does not support %s style property",
          aqString.Quote(element.Name), aqString.Quote(styleProp)),
          aqString.Format("Element: %s\r\nComputed style:\r\n%s", element.FullName, style.cssText),
          BuiltIn.pmNormal, null, element.Parent.Picture());
  } else
    // Internet Explorer 7 - 8
    result = element.currentStyle.getPropertyValue(styleProp);

  return result;
}


function hasFocus(element) {
  var isFocused = element.Focused;
  var result;
  if (isFocused) {
    // Log.Message("Element has focus!");
    result = true;
  } else {
    // Log.Message("Element does not have focus.");
    result = false;
  }
  return result;
}
