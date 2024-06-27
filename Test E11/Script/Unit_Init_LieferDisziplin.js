﻿function browse_Offnen_Anzeigen()
{  
  Browsers.Item(btEdge).Run();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");

  let browser = Sys.Process("chrome"); // Definieren Sie den Browser (Chrome)
  browser.Navigate("http://win2016-vss:2980/MiFID/");
  let page = browser.WaitForWindow("LBBW Markets Operations Portal"); 
  page.Maximize();
  
  //let browser = Sys.Process("chrome"); // Definieren Sie den Browser
  //browser.Navigate("http://win2016-vss:2980/MiFID/");
  //browser.Window("LBBW Markets Operations Portal").Maximize();
  //let page = browser.Page("LBBW Markets Operations Portal"); // Finden Sie die Seite
  page.Wait();

  let frame = page.Frame("Anmeldung"); // Finden Sie den Frame
  let textbox = frame.Textbox("Userid"); // Finden Sie das Textfeld
  textbox.SetText("94012");
  textbox.Keys("[Tab]");

  let passwordBox = frame.Passwordbox("Password"); // Finden Sie das Passwortfeld
  passwordBox.SetText(Project.Variables.Password1);
  passwordBox.SetText(Project.Variables.Password2);
  passwordBox.Keys("[Tab]");
  
  /*
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");
  let page = browser.pageLbbwMarketsOperationsPortal;
  page.Wait();
  let frame = page.frameAnmeldung;
  let textbox = frame.textboxUserid;
  textbox.SetText("94012");
  textbox.Keys("[Tab]");
  let passwordBox = frame.passwordboxPassword;
  passwordBox.SetText(Project.Variables.Password1);
  passwordBox.SetText(Project.Variables.Password2);
  passwordBox.Keys("[Tab]");
  */
  frame.textboxInstitutsnr.SetText("71000");
  frame.passwordboxNewpassword.Click();
  frame.cell2.Click();
  frame.cell.Click();
  frame.imagebuttonAnmelden.Click();

  page = browser.page;
  frame = page.frameMifidframe;
  let frame2 = frame.frameLeft.frameMenuframe;
  frame2.cell2.Click();
  let link = frame2.linkVorgangssteuerungE11;
  link.Click();
  frame2.linkWpLieferdisziplin.Click();
  frame2.linkWertpapierSicht.Click();
  frame2.linkWertpapierSeite.Click();
  frame2.linkAnzeigen.Click();
  frame2 = frame.frameWorkflow;
  textbox = frame2.textboxElement21Formatted;
  textbox.Drag(57, 7, 23, 1);
  textbox.SetText("28.05.2020");
  textbox.Click();
  textbox.Keys("[Enter]");
  frame2.cell2.Click();
  frame = page.frameMifidframe2.frameWorkflow;
  frame.cell.Click();
  frame2.buttonButton034.ClickButton();
  frame.buttonButton093.ClickButton();
  frame.buttonButton08.ClickButton();
  link.Click();
}

function TestInit()
{
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageLbbwMarketsOperationsPortal;
  page.Wait();
  let frame = page.frameAnmeldung;
  let textbox = frame.textboxUserid;
  textbox.SetText(Project.Variables.LoginName);
  //kg textbox.Keys("[Tab]");
  let passwordBox = frame.passwordboxPassword;
  //kg passwordBox.SetText(Project.Variables.Password1);
  passwordBox.SetText(Project.Variables.LoginPass);
//kg   passwordBox.Keys("[Tab]");
  frame.textboxInstitutsnr.SetText(Project.Variables.LoginInstitute);
//kg  frame.passwordboxNewpassword.Click();
//kg  frame.cell2.Click();
//kg  frame.cell.Click();
  frame.imagebuttonAnmelden.Click();
}
function TestLieferDisziplin()
{
  let page = Aliases.browser.page;
  let frame = page.frameMifidframe;
  let frame2 = frame.frameLeft.frameMenuframe;
  let link = frame2.linkVorgangssteuerungE11;
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Vorgangssteuerung E11");
  frame2.linkVorgangssteuerungE11.Click();
  frame2.linkWpLieferdisziplin.Click();
  frame2.linkWertpapierSicht.Click();
  frame2.linkWertpapierSeite.Click();
  let link2 = frame2.linkAnzeigen;
  //kg link2.Click();
  link2.Click();
  frame2 = page.frameMifidframe2.frameWorkflow;
  let vselect = frame2.selectDropdow8;
  vselect.Click(36, 6);
  vselect.Click(12, 7);
  let frame3 = frame.frameWorkflow;
  let textbox = frame3.textboxElement21Formatted;
  textbox.Click();
  textbox.SetText("28.05.2020");
  textbox.Keys("[Enter]");
  frame2.cell2.Click();
  frame3.buttonButton034.ClickButton();
  frame3.buttonButton013.ClickButton();
  //kg link.Click();
  frame2 = frame.frameLeft.frameMenuframe;
  //kg frame2.linkVorgangssteuerungE11.Click();
  //kg frame2.linkVorgangssteuerungE11.Click();
  //page.Wait();
  Delay(200); // Failed:10,20 / Succeeded:>50 (msec).
  frame2.linkVorgangssteuerungE11.Click();
  
}

