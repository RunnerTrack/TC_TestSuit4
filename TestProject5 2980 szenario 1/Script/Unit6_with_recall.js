function Test1()
{
  //Runs a keyword test.
  //KeywordTests.Test2_Dropdown.Run();
  
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("http://win2016-vss:2980/MiFID/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Sets the text '94012' in the 'textboxUserid' text editor.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.textboxUserid.SetText("94012");
  //Enters '[Tab]' in the 'textboxUserid' object.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.textboxUserid.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.passwordboxPassword.SetText(Project.Variables.Password1);
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.passwordboxPassword.SetText(Project.Variables.Password2);
  //Enters '[Tab]' in the 'passwordboxPassword' object.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.passwordboxPassword.Keys("[Tab]");
  //Sets the text '71000' in the 'textboxInstitutsnr' text editor.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.textboxInstitutsnr.SetText("71000");
  //Clicks the 'cell' control.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.cell.Click();
  //Clicks the 'imagebuttonAnmelden' control.
  Aliases.browser.pageLbbwMarketsOperationsPortal.frameAnmeldung.imagebuttonAnmelden.Click();
  //Clicks the 'linkVorgangssteuerungE11' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkVorgangssteuerungE11.Click();
  //Clicks the 'linkWpLieferdisziplin' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWpLieferdisziplin.Click();
  //Clicks the 'linkWertpapierSicht' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWertpapierSicht.Click();
  //Clicks the 'linkWertpapierSeite' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWertpapierSeite.Click();
  //Clicks the 'linkAnzeigen' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkAnzeigen.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.Click(56, 13);
  //Sets the text '27.05.2020' in the 'textboxElement21Formatted' text editor.
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.SetText("27.05.2020");
  //Enters '[Enter]' in the 'textboxElement21Formatted' object.
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.Keys("[Enter]");
  //Clicks the 'cell' control.
  Aliases.browser.page.frameMifidframe.frameWorkflow.cell.Click();
  //Clicks the 'buttonButton034' button.
  Aliases.browser.page.frameMifidframe.frameWorkflow.buttonButton034.ClickButton();
  //Clicks the 'buttonButton013' button.
  Aliases.browser.page.frameMifidframe.frameWorkflow.buttonButton013.ClickButton();
  //Clicks the 'linkBearbeitung' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkBearbeitung.Click();
  //Drags the 'textboxElement21Formatted' object.
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.Drag(58, 4, 111, 37);
  //Sets the text '27.05.2020' in the 'textboxElement21Formatted' text editor.
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.SetText("27.05.2020");
  //Enters '[Enter]' in the 'textboxElement21Formatted' object.
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.Keys("[Enter]");
  //Clicks the 'cell' control.
  Aliases.browser.page.frameMifidframe.frameWorkflow.cell.Click();
  //Clicks the 'buttonButton0342' button.
  Aliases.browser.page.frameMifidframe.frameWorkflow.buttonButton0342.ClickButton();
  //Selects the 'LBBW' item of the 'selectDropdow9' combo box.
  Aliases.browser.page.frameMifidframe.frameWorkflow.selectDropdow9.ClickItem("LBBW");
  //Checks whether the 'wText' property of the Aliases.browser.page.frameMifidframe.frameWorkflow.selectDropdow95 object equals 'Nein'.
  aqObject.CheckProperty(Aliases.browser.page.frameMifidframe.frameWorkflow.selectDropdow95, "wText", cmpEqual, "Nein");
  //Checks whether the 'Text' property of the Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement40 object equals 'UNIT'.
  aqObject.CheckProperty(Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement40, "Text", cmpEqual, "UNIT");
  //Clicks the 'buttonButton016' button.
  Aliases.browser.page.frameMifidframe.frameWorkflow.buttonButton016.ClickButton();
  //Clicks the 'buttonOk' control.
  Aliases.browser.page.Alert.buttonOk.ClickButton();
  //Clicks the 'Button("OK")' button.
  Aliases.browser.page.Alert.Button("OK").ClickButton();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("");
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted.Click();
}