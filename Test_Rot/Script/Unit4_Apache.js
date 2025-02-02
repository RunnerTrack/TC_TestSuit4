﻿function Test1()
{
  
 Browsers.Item(btEdge).Run();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/");
  Sys.Browser().BrowserWindow(0).Maximize();

  let browse = Sys.Browser();
  let page = browse.Page("http://win2016-vss:2980/");
  page.Wait();
  let url = "http://win2016-vss:2980/";
 
  let textNode = page.FindElement("//span[.='Manager App']");
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Manager App");
  textNode.Click();
  page.Wait();
  
  try{
  let login = page.Login;
  if (login.Exists){
  login.TextBox("UserName").Keys("tech_vsscomsrv");
  login.TextBox("Password").Keys("tech_vsscomsrv");
  login.Button("OK").ClickButton();
  }
  }catch(e){
    Log.Message("Login not required");
  }
  
  page=  Sys.Browser().Page("http://win2016-vss:2980/manager/html");
  let seats=page.FindElement("//tr[5]/td[5]/small/a");
  let nUser=aqConvert.StrToInt(seats.contentText);
  Log.Message("Number of Online Users: "+nUser);
  if (nUser>-1){
    seats.Click();
    page.Wait();
//Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions?path=/MiFID&org.apache.catalina.filters.CSRF_NONCE=E304E4960602E96CB154E6C791FE0E44").FindElement("//fieldset[contains(., 'Active HttpSessions informations')]")
// Find the table element on the webpage

page=  Sys.Browser().Page("http://win2016-vss:2980/manager/html/sessions?path=/MiFID&org.apache.catalina.filters.CSRF_NONCE=B8C4CD610406B9E5112B1FD4F56BECCC");
let table = page.FindChild(["ObjectType", "Table"], 5000);

// Get the number of rows in the table
let rowCount = table.RowCount;

// Get the number of columns in the table
let columnCount = table.ColumnCount;

Log.Message("Number of rows in the table: " + rowCount);
Log.Message("Number of columns in the table: " + columnCount);

 
    
  aqObject.CheckProperty(page.FindElement("//th[.='Session Id']"), "contentText", cmpEqual, "Session Id");
  aqObject.CheckProperty(page.FindElement("//td[.='Primary']"), "contentText", cmpEqual, "Primary");
  aqObject.CheckProperty(Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow").style, "length", cmpEqual, 0);
  page.Wait();
  aqObject.CheckProperty(page.FindElement("//span[contains(text(), '94012')]"), "innerText", cmpEqual, "94012");
  page.FindElement("//input[@value='Return to session list']").ClickButton();
  page.Wait();
  let checkbox = page.FindElement("//input[@name='sessionIds']");
  aqObject.CheckProperty(checkbox, "checked", cmpEqual, false);
  checkbox.ClickChecked(true);
  aqObject.CheckProperty(page.FindElement("//input[@name='invalidate']"), "value", cmpEqual, "Invalidate selected Sessions");
  page.FindElement("//input[@value='Return to main page']").ClickButton();
  }
}