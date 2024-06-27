function Test2_timeout()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store']") object equals 'Welcome to our store'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store']"), "contentText", cmpEqual, "Welcome to our store");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//img[contains(@src, 'sports.jpg')]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//img[contains(@src, 'sports.jpg')]"), "contentText", cmpEqual, "");
  //Checks whether the 'src' property of the Aliases.browser.pageShop.FindElement("//img[contains(@src, 'sports.jpg')]") object equals 'https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/media/image/15/sports.jpg?size=250'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//img[contains(@src, 'sports.jpg')]"), "src", cmpEqual, "https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/media/image/15/sports.jpg?size=250");
  //Waits until the browser loads the page and is ready to accept user input.
  //Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/sports").Wait();
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/sports").FindElement("//h1[contains(text(), 'Sports')]") object equals True.
  //aqObject.CheckProperty(Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/sports").FindElement("//h1[contains(text(), 'Sports')]"), "VisibleOnScreen", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/sports").FindElement("//h1[contains(text(), 'Sports')]") object equals 'Sports'.
  //aqObject.CheckProperty(Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/sports").FindElement("//h1[contains(text(), 'Sports')]"), "contentText", cmpEqual, "Sports");
  //Compares the severalProducts Stores item with the image of the Regions.CreateRegionInfo(Aliases.browser.pageShop, 458, 194, 562, 670, false) object.
  Regions.severalProducts.Check(Regions.CreateRegionInfo(Aliases.browser.pageShop, 458, 194, 562, 670, false));
  //Compares the DemoText1 Stores item with the 'B:\TestCompletePro\Training\Data\DemoText.txt' file.
  //Files.DemoText1.Check("B:\\TestCompletePro\\Training\\Data\\DemoText.txt");
  Files.DemoText1.Check("B:\\TestCompletePro\\Training\\DemosText.txt");
}