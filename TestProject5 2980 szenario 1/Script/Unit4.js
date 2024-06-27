function Test1()
{
  /*
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Position(53, -898, 816, 388);
  browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.Click();
  Aliases.OUTLOOK.wndrctrl_renwnd32.NUIDocumentWindow.NetUIHWND.Click(33, 417);
  let frame = browser.page.frameMifidframe;
  let frame2 = frame.frameWorkflow;
  frame2.Click();
  browser.BrowserWindow2.Maximize();
  frame2.Drag(353, 495, -71, 10);
  */
  let browser = Aliases.browser;
  browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.Click();
  let frame = browser.page.frameMifidframe;
  let frame2 = frame.frameWorkflow;
  frame2.Click();
  
  let frame3 = frame.frameLeft.frameMenuframe;
  let link = frame3.linkMen94012;
  link.Click();
  link.Click();
  frame3.linkVorgangssteuerungE11.Click();
  frame3.linkWpLieferdisziplin.Click();
  frame3.linkWertpapierSicht.Click();
  frame3.linkWertpapierSeite.Click();
  link = frame3.linkAnzeigen;
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Anzeigen");
  link.Click();
  let textbox = frame2.textboxElement21Formatted;
  textbox.Click();
  textbox.SetText("28.05.2020");
  textbox.Keys("[Enter]");
  frame2.cell2.Click();
  let cell = frame2.cell;
  cell.Click();
  aqObject.CheckProperty(cell, "contentText", cmpEqual, "407,8000");
  frame2.buttonButton034.ClickButton();
  frame2.buttonButton013.ClickButton();
  frame3.cell.Click();
  aqObject.CheckProperty(frame3.linkBearbeitung, "contentText", cmpEqual, "Bearbeitung");
}