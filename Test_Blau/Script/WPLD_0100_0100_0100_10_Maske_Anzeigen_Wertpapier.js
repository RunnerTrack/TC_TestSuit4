﻿function Maske_WPLD_Wert_Anzeigen()
{
  let frame = Sys.Browser("edge").Page("").FindElement("frame[@name='mifidFrame']");
  let frame2 = frame.FindElement("#left").FindElement("frame[@name='menuFrame']");
  let link = frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Vorgangssteuerung E11");
  link.Click();
  frame2.FindElement("//a[contains(text(), 'WP-LieferdiszipliN')]").Click();
  frame2.FindElement("//a[contains(text(), 'Wertpapier-Sicht')]").Click();
  frame2.FindElement("//a[contains(text(), 'Wertpapier-Seite')]").Click();
  frame2.FindElement("//a[contains(text(), 'Anzeigen')]").Click();
  
}