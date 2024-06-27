function FalschesDatumVom()
{
  let page = Sys.Browser().Page("");
  let frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let textbox = frame.FindElement("//input[@name='element21_formatted']");
  //textbox.Click();
//  if (textbox.Exists){
  let initText=textbox.nextSibling.defaultValue;
  //}
  initText=aqString.SubString(initText,0,aqString.GetLength(initText)-2)+"15";
  textbox.SetText("41.10.2021");
  
  textbox.Keys("[Enter]");
  Log.Message("Passed Invalid Date checking"); 
  
  let button = page.Alert.Button("OK");
  aqObject.CheckProperty(button, "Enabled", cmpEqual, true);
  button.ClickButton();
  frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  textbox = frame.FindElement("//input[@name='element21_formatted']");
  textbox.SetText(initText);
//  textbox.Keys("[Enter]");
//  Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow").FindElement("//button[@name='button019']").Click();
}
