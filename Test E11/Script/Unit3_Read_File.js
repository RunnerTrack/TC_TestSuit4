function Read_Text_File(){
  let sFile="B:\\TestCompletePro\\Training\\Data\\DemoText.txt";
  ReadFileLines(sFile);
}
function ReadWholeFile(AFileName)
{
  var s = aqFile.ReadWholeTextFile(AFileName, aqFile.ctANSI);
  Log.Message("File entire contents:");
  Log.Message(s);
}
function ReadFileLines(AFileName)
{
  var F, s;
   
  F = aqFile.OpenTextFile(AFileName, aqFile.faRead, aqFile.ctANSI);
  F.Cursor = 0;
  let crt=Project.Variables.CountReadText;
  crt++;
  Project.Variables.CountReadText=crt;
  Log.Message("File by lines: ("+AFileName+")["+crt+"]");
  while(! F.IsEndOfFile()){
    s = F.ReadLine();
    Log.Message(s);
  }
  F.Close();
}