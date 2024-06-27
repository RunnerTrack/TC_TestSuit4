﻿function Maske_WPLD_Wert_Anzeigen_Aufbau()
{
  let frame = Sys.Browser("edge").Page("").FindElement("frame[@name='mifidFrame']");
  let frame2 = frame.FindElement("#left").FindElement("frame[@name='menuFrame']");
  let link = frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wItemList", cmpEqual, "Alle;WPL-A;EUREX;SCHLNOTE;WPL");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow48']"), "wItemList", cmpEqual, "Alle;Non EUR;BGN;CAD;CHF;CZK;DKK;EUR;GBP;HRK;HUF;ISK;NOK;PLN;RON;SEK;USD");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow48']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//input[@name='element9']"),"wText",cmpEqual,"");
  
  listDropdow8(frame)  ;

}
function listDropdow8(frm){
  let wrkflw=frm.FindElement("#workflow");
  let dd8=wrkflw.FindElement("//select[@name='dropdow8']");
let elements8="";
  for (i=0;i<dd8.wItemCount;i++){
    elements8+="/ "+dd8.wItem(i);
  }
elements8=aqString.Substring(elements8,1,aqString.GetLength(elements8)-1);
Log.Message("Vorsystems' all elements: "+elements8);  
}