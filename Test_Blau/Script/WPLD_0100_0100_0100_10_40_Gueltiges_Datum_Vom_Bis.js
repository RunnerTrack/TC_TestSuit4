function GueltigesDatumVomBis()
{
  let page = Sys.Browser("edge").Page("");
  let frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  let textbox = frame.FindElement("//input[@name='element21_formatted']");
  //textbox.Click();
//  if (textbox.Exists){
  let initText=textbox.nextSibling.defaultValue;
  //}
  initText=aqString.SubString(initText,0,aqString.GetLength(initText)-2)+"15";
  textbox.SetText(initText);

  textbox = frame.FindElement("//input[@name='element22_formatted']");
  textbox.Keys("[Enter]");
  Sys.Browser("edge").Page("").FindElement("frame[@name='mifidFrame']").Wait().FindElement("#workflow").FindElement("//button[@name='button019']").Click();
 
}