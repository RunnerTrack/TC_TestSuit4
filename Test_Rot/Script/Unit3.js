﻿function Test1(){

  let url = "https://demoqa.com/text-box";
  Browsers.Item(btEdge).Run();
  Browsers.Item(btEdge).Navigate(url);
  Sys.Browser().BrowserWindow(0).Maximize();

  let browse = Sys.Browser();
  let textField1 = browse.Page(url).FindElement("#userName");
  let textField2 = browse.Page(url).FindElement("#userEmail");
  let textField3 = browse.Page(url).FindElement("#currentAddress");

  
//  var textField1 = Sys.Browser().Page("https://demoqa.com/text-box").FindElement("#userName");
//  var textField2 = Sys.Browser().Page("https://demoqa.com/text-box").FindElement("#userEmail");
//  var textField3 = Sys.Browser().Page("https://demoqa.com/text-box").FindElement("#currentAddress");
  
  // Referenziere die Textfeld-Objekte
//    var textField1 = Aliases.browser.pageName.textField1;
//    var textField2 = Aliases.browser.pageName.textField2;

    // Setze Text in das erste Textfeld
    textField2.SetText("blablabla");
    textField3.SetText("Far away from center");
    textField2.setAttribute("focus:true");
    // Überprüfe, wer den Fokus hat
    if (textField1.Focused)
    {
        Log.Message("The cursor is in the first text field.");
    }
    else if (textField2.Focused)
    {
        Log.Message("The cursor is in the second text field.");
    }
    else if (textField3.Focused)
    {
        Log.Message("The cursor is in the second text field.");
    }
    else
    {
        Log.Message("The cursor is not in either text field.");
    }
    
    // Setze den Fokus auf das zweite Textfeld
//    textField2.SetFocus();
    
    // Überprüfe erneut, wer den Fokus hat
    if (textField1.Focused)
    {
        Log.Message("The cursor is in the first text field.");
    }
    else if (textField2.Focused)
    {
        Log.Message("The cursor is in the second text field.");
    }
    else
    {
        Log.Message("The cursor is not in either text field.");
    }
}

function Test2()
{
  
  Log.Message("Starting...");
  let page= Sys.Browser().Page("https://demoqa.com/text-box");
  let element=page.FindElement("#userName");
  //element.Click();
  element.SetText("Jetzt:"+aqDateTime.Now());
  element.SetFocus();
  Log.Message("Cursor position in first text field: " + element.CaretPos);
  Log.Message("Font Size: "+getStyle(element,"Font-size"));
  Log.Message("Color:"+ getStyle(element,"Color"));
  Log.Message("Background Color:"+ getStyle(element,"Background-color"));
  Log.Message("Visibility: "+ getStyle(element,"visibility"));
  Log.Message("hasFocus: "+ getStyle(element,"focus"));
  Log.Message("hasFocus: " + element.Focused); // Verwenden Sie element.Focused

   Log.Message("Starting2...");
  element=page.FindElement("#userEmail");
  
  Log.Message("innerText:"+element.Text);
  Log.Message("Font Size: "+getStyle(element,"Font-size"));
  Log.Message("Color:"+ getStyle(element,"Color"));
  Log.Message("Background Color:"+ getStyle(element,"Background-color"));
  Log.Message("Visibility: "+ getStyle(element,"visibility"));
  Log.Message("hasFocus: "+ getStyle(element,"focus"));
  Log.Message("hasFocus: " + element.Focused); // Verwenden Sie element.Focused

  
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
 