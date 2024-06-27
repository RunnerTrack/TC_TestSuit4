function start(){
  ListBrowsers();
CheckAndOpenEdge("http://win2016-vss:2980/MiFID/");
}

function ListBrowsers()
{
  var browser;
  
  for (var i=0; i < Browsers.Count; i++)
  {
    browser = Browsers.Item(i);
    Log.Message("Browser " + aqConvert.IntToStr(i) + " : " + browser.Description);
  }
}
function CheckAndOpenEdge(pageUrl) {
  var browserName = "msedge";
//  var pageUrl = "https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/";
 // let p = Sys.Browser("*");
  // Überprüfen, ob der Edge-Browser geöffnet ist
  var browser = Sys.WaitBrowser(browserName, 5000);
  var isEdgeOpen = browser.Exists;
  
  if (isEdgeOpen) {
    // Edge ist geöffnet, navigieren zur gewünschten Seite
    var page=browser.Page("*");
    page.Keys("^T").Keys("^T");
    
    Delay(1000);
    page.Keys("^T");
    browser.ToUrl(pageUrl);
    Log.Message("Opened a new tab and navigated to " + pageUrl + " in Edge.");
  } else {
    // Edge ist nicht geöffnet, Browser starten und zur gewünschten Seite navigieren
    var browser = Browsers.Item(btEdge).Run(pageUrl);
    Log.Message("Started Edge and navigated to " + pageUrl);
  }
}

function Test1()
{


}

function Test2()
{
  let browser = Sys.Browser();
  let browserWindow = browser.BrowserWindow(0);
  browserWindow.Click(1113, 22);
  Browsers.Item(btEdge).Navigate("https://www.bing.com/search?pglt=41&q=asa&cvid=ea1ad40d8cf64e929b3d35a89d45eb1c&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhAMgYIAhAuGEAyBggDEC4YQDIGCAQQLhhAMgYIBRAAGEAyBggGEC4YQDIGCAcQABhAMgYICBAuGEAyCAgJEOkHGPxV0gEHOTE0ajBqMagCALACAA&FORM=ANNAB1&PC=U531");
  browserWindow.Maximize();
  browser.Page("https://www.bing.com/search*").FindElement("//body[contains(., 'Weiter zum Inhalt')]").Keys("^T");
  browser.Page("http://win2016-vss:2980/MiFID/", 3).FindElement("frame[@name='Anmeldung']").FindElement("//input[@name='userid']").Keys("^t");
}