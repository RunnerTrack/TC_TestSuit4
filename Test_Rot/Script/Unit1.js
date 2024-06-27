function Test2()
{
  Log.Message("Starting...");
  let page= Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let element=page.FindElement("//input[@name='element21_formatted']");
  element.Click();
  Log.Message("Font Size: "+getStyle(element,"Font-size"));
  Log.Message("Color:"+ getStyle(element,"Color"));
  Log.Message("Background Color:"+ getStyle(element,"Background-color"));
  Log.Message("Visibility: "+ getStyle(element,"visibility"));
  Log.Message("hasFocus: "+ hasFocus(element));
  
    Log.Message("Starting2...");
  element=page.FindElement("//input[@name='element22_formatted']");
  
  Log.Message("Font Size: "+getStyle(element,"Font-size"));
  Log.Message("Color:"+ getStyle(element,"Color"));
  Log.Message("Background Color:"+ getStyle(element,"Background-color"));
  Log.Message("Visibility: "+ getStyle(element,"visibility"));
  Log.Message("hasFocus: "+ hasFocus(element));
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
  }
  else
    // Internet Explorer 7 - 8
    result = element.currentStyle.getPropertyValue(styleProp);
 
  return result;
}
 
 
function hasFocus2(element) {
    var isFocused = element.Focused;
    var result;
    if (isFocused) {
//        Log.Message("Element has focus!");
        result=true;
    } else {
//        Log.Message("Element does not have focus.");
        result=false;
    }
    return result;
}
function hasFocus(element) {
  var focusedElement = element.ownerDocument.activeElement;
  return focusedElement === element;
}
 

