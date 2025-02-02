﻿function Test1()
{
  var defBall, BrowserItems, i, TimeoutValue, RecordIdx;
  defBall = "";
  //Iterates through the specified browsers.
  BrowserItems = new Array(2);
  BrowserItems[0] = Browsers.Item("edge");
  BrowserItems[1] = Browsers.Item("chrome");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    TimeoutValue = Options.Run.Timeout;
    Options.Run.Timeout = 2500;
    //Clicks the 'textboxInstasearch' control.
    Aliases.browser.pageShop.header.formSearch.textboxInstasearch.Click();
    Options.Run.Timeout = TimeoutValue;
    //Sets the text 'ball' in the 'textboxInstasearch' text editor.
    Aliases.browser.pageShop.header.formSearch.textboxInstasearch.SetText("ball");
    Project.Variables.varThird = Aliases.browser.pageShop.sectionContent.article8.textnode8.innerText;
    Project.Variables.ballVariable = Aliases.browser.pageShop.sectionContent.articleBasketball.textnodeBasketball.contentText;
    //Delays the test execution for the specified time period.
    Delay(1250);
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
    //Log.Message(Project.Variables.ballVariable, Project.Variables.data_sourcing1.Value("FirstName"), Project.Variables.data_sourcing1.Value("LastName"), Project.Variables.data_sourcing1.Value("Address"), Project.Variables.data_sourcing1.Value("City"), Project.Variables.data_sourcing1.Value("Country"));
    //Project.Variables.data_sourcing1.Reset();
    //for(RecordIdx = 1; RecordIdx < 2; RecordIdx++)
      //Project.Variables.data_sourcing1.Next();
    //for(; !Project.Variables.data_sourcing1.IsEOF();)
    //{
      ////Posts an information message to the test log.
      ////Log.Message(Project.Variables.ballVariable, Project.Variables.data_sourcing1.Value("FirstName"), Project.Variables.data_sourcing1.Value("LastName"), Project.Variables.data_sourcing1.Value("Address"), Project.Variables.data_sourcing1.Value("City"), Project.Variables.data_sourcing1.Value("Country"));
      Project.Variables.data_sourcing1.Next();
    }
  }
