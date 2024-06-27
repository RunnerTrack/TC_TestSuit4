function Test1()
{
  var defBall, RecordIdx;
  defBall = "";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxInstasearch' control.
  Aliases.browser.pageShop.header.formSearch.textboxInstasearch.Click();
  //Sets the text 'ball' in the 'textboxInstasearch' text editor.
  Aliases.browser.pageShop.header.formSearch.textboxInstasearch.SetText("ball");
  Project.Variables.varThird = Aliases.browser.pageShop.sectionContent.article8.textnode8.innerText;
  Project.Variables.ballVariable = Aliases.browser.pageShop.sectionContent.articleBasketball.textnodeBasketball.contentText;
  //Clicks the 'textnodeAvailableInDifferentColo' control.
  Aliases.browser.pageShop.header.formSearch.linkOfficialGame.textnodeAvailableInDifferentColo.Click();
  Project.Variables.detailedBall = Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.radiobutton5.Name;
  //Checks whether the 'contentText' property of the Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.textnodeOfficialGameBall object equals 'Official game ball'.
  aqObject.CheckProperty(Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.textnodeOfficialGameBall, "contentText", cmpEqual, "Official game ball");
  //Posts an information message to the test log.
  Log.Message(Project.Variables.detailedBall);
  //Posts an information message to the test log.
  Log.Message(Project.Variables.varThird, "");
  //Posts an information message to the test log.
  //kg Log.Message(Project.Variables.ballVariable, Project.Variables.data_sourcing.Value("FirstName"), Project.Variables.data_sourcing.Value("LastName"), Project.Variables.data_sourcing.Value("Address"), Project.Variables.data_sourcing.Value("City"), Project.Variables.data_sourcing.Value("Country"));
  Project.Variables.data_sourcing.Reset();
  for(RecordIdx = 1; RecordIdx < 2; RecordIdx++)
    Project.Variables.data_sourcing.Next();
  for(; !Project.Variables.data_sourcing.IsEOF();)
  {
    //Posts an information message to the test log.
//kg    Log.Message(Project.Variables.ballVariable, Project.Variables.data_sourcing.Value("FirstName"), Project.Variables.data_sourcing.Value("LastName"), Project.Variables.data_sourcing.Value("Address"), Project.Variables.data_sourcing.Value("City"), Project.Variables.data_sourcing.Value("Country"));
    Log.Message(Project.Variables.data_sourcing.Value("Country"));
    Project.Variables.data_sourcing.Next();
  }
}