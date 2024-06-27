
function Maske_WPLD_Wert_Anzeigen()
{
//let edgeBrowser = Browsers.Item(0); // Or, Browsers.Item("Microsoft Edge")
// Use 'edgeBrowser' for subsequent interactions
//edgeBrowser.Navigate("http://win2016-vss:2980/MiFID/");
//let frame = edgeBrowser.Page("").FindElement("frame[@name='mifidFrame']");
// ... rest of your code using 'frame' and other elements

  let frame = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let frame2 = frame.FindElement("#left").FindElement("frame[@name='menuFrame']");
  let link = frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Vorgangssteuerung E11");
  link.Click();
  frame2.FindElement("//a[contains(text(), 'WP-LieferdiszipliN')]").Click();
  frame2.FindElement("//a[contains(text(), 'Wertpapier-Sicht')]").Click();
  frame2.FindElement("//a[contains(text(), 'Wertpapier-Seite')]").Click();
  frame2.FindElement("//a[contains(text(), 'Anzeigen')]").Click();
  
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wItemList", cmpEqual, "Alle;WPL-A;EUREX;SCHLNOTE;WPL");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow48']"), "wItemList", cmpEqual, "Alle;Non EUR;BGN;CAD;CHF;CZK;DKK;EUR;GBP;HRK;HUF;ISK;NOK;PLN;RON;SEK;USD");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow48']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//input[@name='element9']"),"wText",cmpEqual,"");
  listDropdow8(frame)  ;
  testDates();
  
  //Close the Mask
  let btn49=frame.FindElement("#workflow").FindElement("//button[@name='button049']");
//  while (!btn49.Exists){}
  btn49.Click();
  //frame.FindElement("#workflow").FindElement("//button[@name='button049']").Click(); 
  //Shrink the menu
  Delay(100);
  let frm2=frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  //while(!frm2.VisibleOnScreen){}
  frm2.Click();
  //frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]").Click();
}

function Maske_WPLD_Geld_Anzeigen()
{
//let edgeBrowser = Browsers.Item(0); // Or, Browsers.Item("Microsoft Edge")
// Use 'edgeBrowser' for subsequent interactions
//edgeBrowser.Navigate("http://win2016-vss:2980/MiFID/");
//let frame = edgeBrowser.Page("").FindElement("frame[@name='mifidFrame']");
// ... rest of your code using 'frame' and other elements
Delay(100);
  let frame = Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']");
  let frame2 = frame.FindElement("#left").FindElement("frame[@name='menuFrame']");
  let link = frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Vorgangssteuerung E11");
  link.Click();
  Delay(250);
  frame2.FindElement("//a[contains(text(), 'WP-LieferdiszipliN')]").Click();
  frame2.FindElement("//a[contains(text(), 'Geld-Sicht')]").Click();
  frame2.FindElement("//a[contains(text(), 'Penalties')]").Click();
  frame2.FindElement("//a[contains(text(), 'Anzeigen')]").Click();
  
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wItemList", cmpEqual, "Alle;WPL-A;EUREX;SCHLNOTE;WPL");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow8']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow10']"), "wItemList", cmpEqual, "Alle;BOS;LUKAS;MOBOG;ROLV;WPL");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow10']"), "wText", cmpEqual, "Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//input[@name='element9']"),"wText",cmpEqual,"");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow33']"),"wItemList", cmpEqual,"Ja;Nein;Alle");
  aqObject.CheckProperty(frame.FindElement("#workflow").FindElement("//select[@name='dropdow33']"),"wText", cmpEqual,"Alle");
  //Close the Mask
  let btn61=frame.FindElement("#workflow").FindElement("//button[@name='button061']");
  btn61.Click();
  Delay(100);
  let frm2=frame2.FindElement("//a[contains(text(), 'Vorgangssteuerung E11')]");
  frm2.Click();
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

function testDates()
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
  
  let button = page.Alert.Button("OK");
  aqObject.CheckProperty(button, "Enabled", cmpEqual, true);
  button.ClickButton();
  frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  textbox = frame.FindElement("//input[@name='element21_formatted']");
  textbox.SetText(initText);
  textbox.Keys("[Enter]");
  Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow").FindElement("//button[@name='button019']").Click();

//check: date of end   
  textbox = frame.FindElement("//input[@name='element22_formatted']");
  //textbox.Click();
//  if (textbox.Exists){
  initText=textbox.Text;
  //}
  //initText=aqString.SubString(initText,0,aqString.GetLength(initText)-2)+"15";
  textbox.SetText("32.11.2020");
  textbox.Keys("[Enter]");
  
  button = page.Alert.Button("OK");
  aqObject.CheckProperty(button, "Enabled", cmpEqual, true);
  button.ClickButton();
  frame = page.FindElement("frame[@name='mifidFrame']").FindElement("#workflow");
  textbox = frame.FindElement("//input[@name='element22_formatted']");
  textbox.SetText(initText);
  textbox.Keys("[Enter]");
  Sys.Browser().Page("").FindElement("frame[@name='mifidFrame']").FindElement("#workflow").FindElement("//button[@name='button019']").Click();

  
}

function Login() {

// Run from Command Line: 
// testcomplete "C:\Users\goerenekli\Documents\TestComplete 15 Projects\TestProject4\TestSuit4.pjs" /r /p:"Test E11"
// testcomplete "C:\Users\goerenekli\Documents\TestComplete 15 Projects\TestProject4\TestSuit4.pjs" /r /p:Test_E11 /ExportLog:"B:\TestCompletePro\Training\Output\result.htm" /ExportSummary:"B:\TestCompletePro\Training\Output\JUnit-rprt.xml"

//@echo off
//set timestamp=%DATE:~0,4%%DATE:~5,2%%DATE:~8,2%%TIME:~3,2%%TIME:~6,2%
//testcomplete "C:\Users\goerenekli\Documents\TestComplete 15 Projects\TestProject4\TestSuit4.pjs" /r /p:Test_E11 /ExportLog:"B:\TestCompletePro\Training\Output\result_%timestamp%.htm" /ExportSummary:"B:\TestCompletePro\Training\Output\JUnit-rprt_%timestamp%.xml"


 //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");
  Sys.Browser().BrowserWindow(0).Maximize();
  
  let browse = Sys.Browser();
  let url = "http://win2016-vss:2980/MiFID/";
  let anmeldeFrame = browse.Page(url).FindElement("frame[@name='Anmeldung']");
  
  //browser.Run(btEdge);
  //browser.Navigate(url);
  //browser.BrowserWindow(0).Maximize();
  
  let userIdField = anmeldeFrame.FindElement("//input[@name='userid']");
  let passwordField = anmeldeFrame.FindElement("//input[@name='password']");
  let institutsnrField = anmeldeFrame.FindElement("//input[@name='institutsnr']");
  let submitButton = anmeldeFrame.FindElement("//input[@type='image']");
  
  userIdField.SetText("94012");
  passwordField.SetText(Project.Variables.Password1);
  institutsnrField.SetText("71000");
  submitButton.Click();
  //kg I did this because it gave error when I run batch file
  Delay(100);
}

function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");
  Sys.Browser().BrowserWindow(0).Maximize();
  //Clicks the 'FindElement("//input[@name='userid']")' control.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='userid']").Click();
  //Sets the text '94012' in the 'FindElement("//input[@name='userid']")' text editor.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='userid']").SetText("94012");
  //Sets the text Project.Variables.Password1 in the 'FindElement("//input[@name='password']")' text editor.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='password']").SetText(Project.Variables.Password1);
  //Clicks the 'FindElement("//input[@name='institutsnr']")' control.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='institutsnr']").Click();
  //Sets the text '71000' in the 'FindElement("//input[@name='institutsnr']")' text editor.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='institutsnr']").SetText("71000");
  //Clicks the 'FindElement("//input[@type='image']")' control.
  Sys.Browser().Page("http://win2016-vss:2980/MiFID/").FindElement("frame[@name='Anmeldung']").FindElement("//input[@type='image']").Click();
}

function Test4(){
 

let isBrowserRunning = false;

for (let i = 0; i < Browsers.Count; i++) {
  if (Browsers.Item(i).Name == "Microsoft Edge") {
    let mico=Browsers.Item(i);
    isBrowserRunning = true;
    break; // Exit the loop if Edge is found
  }
}

if (!isBrowserRunning) {
  // Launch Edge browser if not found
  Browsers.Item(btEdge).Run();
}

 //Launches the specified browser and opens the specified URL in it.
//  Browsers.Item(btEdge).Run();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://win2016-vss:2980/MiFID/");

  Sys.Browser().BrowserWindow(0).Maximize();
  
  let browse = Sys.Browser();
  let url = "http://win2016-vss:2980/MiFID/";
  let anmeldeFrame = browse.Page(url).FindElement("frame[@name='Anmeldung']");
  
  //browser.Run(btEdge);
  //browser.Navigate(url);
  //browser.BrowserWindow(0).Maximize();
  
  let userIdField = anmeldeFrame.FindElement("//input[@name='userid']");
  let passwordField = anmeldeFrame.FindElement("//input[@name='password']");
  let institutsnrField = anmeldeFrame.FindElement("//input[@name='institutsnr']");
  let submitButton = anmeldeFrame.FindElement("//input[@type='image']");
  
  userIdField.SetText("94012");
  passwordField.SetText(Project.Variables.Password1);
  institutsnrField.SetText("71000");
  submitButton.Click();

}

function Test2(){
  let browse = Sys.Browser();
  let page = browse.page;
  let frame = page.frameMifidframe;
  let frame2 = frame.frameLeft.frameMenuframe;
}