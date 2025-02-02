﻿function Test2_Dropdown()
{ 
  
  //Clicks the 'frameWorkflow' control.
  Aliases.browser.page.frameMifidframe.frameWorkflow.Click();
  //Maximizes the 'BrowserWindow2' window.
  Aliases.browser.BrowserWindow2.Maximize();
  //Clicks the 'linkVorgangssteuerungE11' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkVorgangssteuerungE11.Click();
  //Clicks the 'linkWpLieferdisziplin' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWpLieferdisziplin.Click();
  //Clicks the 'linkWertpapierSicht' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWertpapierSicht.Click();
  //Clicks the 'linkWertpapierSeite' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkWertpapierSeite.Click();
  //Clicks the 'linkAnzeigen' link.
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkAnzeigen.Click();

  //***
//  Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted;
  let txtDateFrom = Aliases.browser.page.frameMifidframe.frameWorkflow.textboxElement21Formatted;
  let txtDateTo   = Aliases.browser.page.frameMifidframe2.frameWorkflow.textboxElement22Formatted;
  if (Project.Variables.DateFrom!="-1"){
    txtDateFrom.SetText(Project.Variables.DateFrom);
  }
  if (Project.Variables.DateTo!="-1"){
    txtDateTo.SetText(Project.Variables.DateTo);
  }
  //****
let frm2=Aliases.browser.page.frameMifidframe2;
let objectSize8=frm2.frameWorkflow.selectDropdow8.wItemCount;
let objectSize10=frm2.frameWorkflow.selectDropdow10.wItemCount;
let objectName8=frm2.frameWorkflow.selectDropdow8.wItem(1);
let objectName10=frm2.frameWorkflow.selectDropdow10.wItem(2);


Log.Message("Vorsystem has "+objectSize8+" elements and the second element is: "+objectName8);
Log.Message("Liefersystem has "+objectSize10+" elements and the third element is :"+objectName10);


frm2.frameWorkflow.selectDropdow8.ClickItem(3);
Aliases.browser.page.frameMifidframe2.frameWorkflow.selectDropdow10.ClickItem("WPL");

//Dropdow8
let dd8=frm2.frameWorkflow.selectDropdow8;
let elements8="";
  for (i=0;i<dd8.wItemCount;i++){
    elements8+="/ "+dd8.wItem(i);
  }
elements8=aqString.Substring(elements8,1,aqString.GetLength(elements8)-1);
Log.Message("Vorsystems' elements: "+elements8);

//Dropdow10
Log.Message("Liefersystems' elements")
let dd10=frm2.frameWorkflow.selectDropdow10;
  for (i=0;i<dd10.wItemCount;i++){
    Log.Message((i+1)+"#:"+dd10.wItem(i));
  }
}

function ReadAnwendungen(){
  let anw=Project.Variables.Anwendungen;
  //let txtFrom="";
  anw.Reset();
  for(; !anw.IsEOF(); ){
    Log.Message("* "+anw.Value("Number")+" / "+anw.Value("Name")+" / "+ anw.Value("Action")+" / "+ anw.Value("Feature1")+" / "+anw.Value("DateFrom")+" / "+anw.Value("DateTo"));
    if (anw.Value("Action")=="Yes"){
      Project.Variables.DateFrom=anw.Value("DateFrom");
      Project.Variables.DateTo=anw.Value("DateTo");
      Log.Message("This Test is being executed");
      Test2_Dropdown();
      }
    anw.Next();
  }

}
function getDayOfWeekFromStr(strDate)
{
      strD= aqString.Replace(strDate,".","/");
      strD=StrToDateTime(strD);
      getDayOfWeekFromStr=DayOfWeek(strD);
}
