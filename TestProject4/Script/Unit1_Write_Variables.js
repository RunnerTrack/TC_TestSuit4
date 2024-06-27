function Test1()
{
  var defBall;
  defBall = "";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxInstasearch' control.
  Aliases.browser.pageShop.header.formSearch.textboxInstasearch.Click();
  //Sets the text 'ball' in the 'textboxInstasearch' text editor.
  Aliases.browser.pageShop.header.formSearch.textboxInstasearch.SetText("ball");
  //Clicks the 'textnodeAvailableInDifferentColo' control.
  Aliases.browser.pageShop.header.formSearch.linkOfficialGame.textnodeAvailableInDifferentColo.Click();
  //Project.Variables.detailedBall = Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.radiobutton5.value;
  defBall = Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.radiobutton5.value;
  //Checks whether the 'contentText' property of the Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.textnodeOfficialGameBall object equals 'Official game ball'.
  Log.Message("defBall:"+defBall);
  aqObject.CheckProperty(Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.textnodeOfficialGameBall, "contentText", cmpEqual, "Official game ball");
  //defBall = Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.radiobutton5.innerText;
  //Posts an information message to the test log.
 Project.Variables.detailedBall=defBall;
 Log.Message("detailed & Ball:"+Project.Variables.detailedBall);
  Log.Message("def & Ball:"+Aliases.browser.pageTorfabrikOfficialGameBall.sectionContent.articleOfficialGameBall.asideOfficialGameBall.textnodeOfficialGameBall.contentText);
}

function exportieren() {
  var filePath = "B:\\TestCompletePro\\Scripting.Variables_FileSystemObject.csv";
  saveVariablesToFile(filePath);
}

function saveVariablesToFile(filePath) {
    var variables = Project.Variables;
    var file = aqFile.OpenTextFile(filePath, aqFile.faWrite, aqFile.ctANSI);

    for (var i = 0; i < variables.VariableCount; i++) {
        var variableName = variables.GetVariableName(i);
        var variableValue = variables.VariableByName(variableName);
        file.WriteLine(variableName + "=" + variableValue);
        Log.Message("Variable " + variableName + " mit Wert " + variableValue + " wurde in die Datei geschrieben.");
    }

    file.Close();
}


function readVariables(){
  
var i, id, name;
  for (i = 0; i < Project.Variables.VariableCount; i++)
  {
    name = Project.Variables.GetVariableName(i);
    id = Log.CreateFolder(name);
    Log.PushLogFolder(id);
    Log.Message("Type: " + Project.Variables.GetVariableType(i));
    Log.Message("Value: " + Project.Variables.VariableByName(name));
    Log.Message("Category: " + Project.Variables.GetVariableCategory(i));
    Log.Message("Description: " + Project.Variables.GetVariableDescription(i));
    Log.PopLogFolder();
   Log.Message( name + " => " + Project.Variables.VariableByName(name));
  }

}


