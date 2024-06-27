function WL_Test3()
{
  Log.Checkpoint("Executed script Test3 bla bla bla")
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkVorgangssteuerungE11.Click();
  Log.Message("Test3 blaald");
}
 
module.exports.WL_Test3 = WL_Test3;