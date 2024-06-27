function FalschesDatumBis()
{
  let page = Sys.Browser("edge").Page("");
  let frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let textbox = frame.FindElement("//input[@name='element22_formatted']");

  let initText=textbox.Text; //=textbox.nextSibling.defaultValue;

  textbox.SetText("32.11.2020");
  textbox.Keys("[Enter]");
  button = page.Alert.Button("OK");
  aqObject.CheckProperty(button, "Enabled", cmpEqual, true);
  button.ClickButton();
  frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  textbox = frame.FindElement("//input[@name='element22_formatted']");
  textbox.SetText(initText);
  //textbox.Keys("[Enter]");
  //Sys.Browser("edge").Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow").FindElement("//button[@name='button019']").Click();
}
