function Test2()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/");
  Sys.Browser().BrowserWindow(0).Maximize();
  //Clicks the 'FindElement("//span[.='Manager App']")' control.
  Sys.Browser().Page("http://win2016-vss:2980/").FindElement("//span[.='Manager App']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html").Wait();
  //Enters 'tech_vsscomsrv![Home]^c[Tab]' in the 'TextBox("UserName")' object.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html").Login.TextBox("UserName").Keys("tech_vsscomsrv![Home]^c[Tab]");
  //Enters '^v' in the 'TextBox("Password")' object.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html").Login.TextBox("Password").Keys("^v");
  //Clicks the 'Button("OK")' control.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html").Login.Button("OK").ClickButton();
  //Clicks the 'FindElement("//tr[5]/td[5]/small/a")' link.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html").FindElement("//tr[5]/td[5]/small/a").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Clicks the 'FindElement("//a[.='BD102016D9C5D00FD5ACE028181CECDD']")' link.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//a[.='BD102016D9C5D00FD5ACE028181CECDD']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Checks whether the 'contentText' property of the Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//span[contains(text(), '94012')]") object equals '94012'.
  aqObject.CheckProperty(Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//span[contains(text(), '94012')]"), "contentText", cmpEqual, "94012");
  //Clicks the 'FindElement("//input[@value='Refresh']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@value='Refresh']").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Clicks the 'FindElement("//input[@value='Refresh']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@value='Refresh']").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Clicks the 'FindElement("//input[@value='Return to session list']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@value='Return to session list']").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Clicks the 'FindElement("//a[.='594196B1D891573EBA5B29D9FD67EE22']")' link.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//a[.='594196B1D891573EBA5B29D9FD67EE22']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Checks whether the 'contentText' property of the Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//span[contains(text(), '94012')]") object equals '94012'.
  aqObject.CheckProperty(Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//span[contains(text(), '94012')]"), "contentText", cmpEqual, "94012");
  //Clicks the 'FindElement("//input[@value='Return to session list']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@value='Return to session list']").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Sets the state of the 'FindElement("//tr/td/input[@name='sessionIds']")' checkbox to True.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr/td/input[@name='sessionIds']").ClickChecked(true);
  //Checks whether the 'value' property of the Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr[2]/td/input[@name='sessionIds']") object equals '594196B1D891573EBA5B29D9FD67EE22'.
  aqObject.CheckProperty(Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr[2]/td/input[@name='sessionIds']"), "value", cmpEqual, "594196B1D891573EBA5B29D9FD67EE22");
  //Sets the state of the 'FindElement("//tr[2]/td/input[@name='sessionIds']")' checkbox to True.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr[2]/td/input[@name='sessionIds']").ClickChecked(true);
  //Checks whether the 'value' property of the Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr/td/input[@name='sessionIds']") object equals 'BD102016D9C5D00FD5ACE028181CECDD'.
  aqObject.CheckProperty(Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//tr/td/input[@name='sessionIds']"), "value", cmpEqual, "BD102016D9C5D00FD5ACE028181CECDD");
  //Clicks the 'FindElement("//input[@name='invalidate']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@name='invalidate']").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").Wait();
  //Clicks the 'FindElement("//input[@value='Return to main page']")' button.
  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions*").FindElement("//input[@value='Return to main page']").ClickButton();
}