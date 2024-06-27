var sOutput="";
function Reading()
{
 var pieces=5;
 var dArr=[];
 var dd=Project.Variables.Multi_Masks;
 dd.Reset();
 for(Idx = 0; Idx < 1; Idx++)
    dd.Next();
 for(Idx=0;Idx<pieces;Idx++){
    dArr[Idx]=[2];
    dArr[Idx][0]=dd.Value("Norder");
    dArr[Idx][1]=dd.Value("Name");
    dd.Next();
 }

 //for (i=0;i<10;i++){   Log.Message(i+"> Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]); }
  dArr.sort((a,b) => a[0] - b[0]);
  //for (i=0;i<10;i++){   Log.Message(i+": Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]); }
  
    for (i=0;i<dArr.length;i++){
        sOutput+= "\n\nfunction "+dArr[i][1]+"()\n {\n\t var "+dArr[i][1]+" = require('"+dArr[i][1]+"');        \n\t\t"+dArr[i][1]+"."+dArr[i][1]+"();\n}";
}
Log.Message("sOutput: "+sOutput);

}

function ReadingAndWrite()
{
 var fName="B:\\TestCompletePro\\Training\\Data\\ExcelScripts.js";
 //var pieces=5;
 var dArr=[];
 var dd=Project.Variables.Mult2_Masks;
 // var dd=DDT.ExcelDriver(Project.Variables.Multi_Masks,"TestList");

 dd.Reset();
 //for(Idx = 0; Idx < 1; Idx++)    dd.Next();
 // for(Idx=0;Idx<pieces;Idx++){
 for(Idx=0;!dd.IsEOF();Idx++){
    dArr[Idx]=[2];
    dArr[Idx][0]=dd.Value("Norder");
    dArr[Idx][0]=aqString.SubString(dArr[Idx][0],1+aqString.Find( dArr[Idx][0],"-"),1000);

    dArr[Idx][1]=dd.Value("Nname");
    dd.Next();
 }

 //for (i=0;i<10;i++){   Log.Message(i+"> Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]); }
//  dArr.sort((a,b) => a[0] - b[0]);
    dArr=string_sort(dArr);
  //for (i=0;i<10;i++){   Log.Message(i+": Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]); }
  
    for (i=0;i<dArr.length;i++){
//        sOutput+= "\n\nfunction "+dArr[i][1]+"()\n {\n\t var "+dArr[i][1]+" = require('"+dArr[i][1]+"');        \n\t\t"+dArr[i][1]+"."+dArr[i][1]+"();\n}";
        sOutput+= "\n\nfunction "+dArr[i][1]+"()\n {\n\t var "+dArr[i][1]+" = require('"+dArr[i][1]+"');        \n\t\t"+dArr[i][1]+".Starten();\n}";
    }
   /*
    var fileObj=aqFile.Create("Text");
    var writeResult=fileObj.WriteToTextFile(fName,sOutput,aqFile.ctUTF8,true);
    if (writeResult)
      Log.Message("File '"+fName+"' created or overwritten successfully!");
    else
     Log.Error("Error writing to file: " + fileObj.LastError);
     */
   if (!aqFile.Exists(fName))
    aqFile.Create(fName);
   aqFile.WriteToTextFile(fName,sOutput,aqFile.ctUTF8,true);    

Log.Message("sOutput: "+sOutput);

}

// Function to perform sort
function string_sort (str) {
  let i = 0,
    j
  while (i < str.length) {
    j = i + 1
    while (j < str.length) {
      if (str[j][0] < str[i][0]) {
        let temp = str[i]
        str[i] = str[j]
        str[j] = temp
      }
      j++
    }
    i++
  }
  return str;
}

function Reading_1()
{
 var dArr=[];
 dOrder=new Array(10) ;
 dName=new Array(10) ;
 
 var dd=Project.Variables.Multi_Masks;
 dd.Reset();
 for(Idx = 0; Idx < 10; Idx++)
    dd.Next();
 for(Idx=0;Idx<10;Idx++){
    dArr[Idx]=[2];
    dArr[Idx][0]=dd.Value("Norder");
    dArr[Idx][1]=dd.Value("Name");
    dOrder[Idx]=dd.Value("Norder");
    dName[Idx]=dd.Value("Name");
 dd.Next();
 }

 for (i=0;i<10;i++){
   Log.Message(i+"> Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]);
 }
 
 dArr.sort((a,b) => a[0] - b[0]);
 
 for (i=0;i<10;i++){
   Log.Message(i+": Order:"+dOrder[i]+" Name:"+dName[i]+"\t oRrder:"+dArr[i][0]+" nAme:"+dArr[i][1]);
 }


 
 
 
  
//kg  let defBall="Defining Balls which are used";
  //kg Log.Message("defBall:"+defBall);
}

//maske01=require("mask01");
function mask01(){ 
  }
  