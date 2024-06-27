function Reading()
{
    Project.Variables.data_sourcing.Reset();
  for(RecordIdx = 1; RecordIdx < 2; RecordIdx++)
    Project.Variables.data_sourcing.Next();
  for(; !Project.Variables.data_sourcing.IsEOF();)
  {
    //Posts an information message to the test log.
    Log.Message(Project.Variables.data_sourcing.Value("FirstName")+" / "+  Project.Variables.data_sourcing.Value("LastName")+" / "+  Project.Variables.data_sourcing.Value("Address")+" / "+  Project.Variables.data_sourcing.Value("City")+" / "+ Project.Variables.data_sourcing.Value("Country"));
    Project.Variables.data_sourcing.Next();
  }

}
var Buck=require("Buckley");
function Hull(){
  try
  {
  Log.Message("Hull called");
  Aliases.browser.page.frameMifidframe.frameLeft.frameMenuframe.linkVorgangssteuerungE11.Click();
  let n;
  n*=Project.Variables.Password1;
Log.Message("Final conclusion");  
  ReportingFunctions.fn_createteststep(1, "Expected action in Hull", "Hull completed successfully", "Test Data", false);    
  }
  catch (error)
  {
 // Log.Error("Error in Hull",error.message);
  ReportingFunctions.fn_createteststep(0, "Expected action in Hull", "Hull completed successfully", "Test Data", false);    
  }

}

function SampleCallMethod2()
{

      ReportingFunctions.setLogsPath("B:\\TestCompletePro\\CreateOutput\\Reports\\");
//      ReportingFunctions.setExecutionStartTime(aqDateTime.Time())
      ReportingFunctions.setExecutionStartTime(aqDateTime.Now())


//*******Case 1
      ReportingFunctions.setTestCaseExeStartTime(aqDateTime.Now())
      ReportingFunctions.fn_createtestcasedescription("Module1","TestCaseID","TestCaseDescription","SYS");

//Funktionen   
Reading();
ReportingFunctions.fn_createteststep(1, "Expected Result", "Actual Result", "Test Data", false);
Hull();
  ReportingFunctions.fn_createteststep(1, "Expected Result", "Actual Result", "Test Data", false);
//Buck.Buckley();
  //ReportingFunctions.fn_createteststep(1, "Expected Result", "Actual Result", "Test Data", false);

//Schluß von Case 1  
  ReportingFunctions.setTestCaseExeEndTime(aqDateTime.Now());
  ReportingFunctions.fn_createtestcaseduration();
  ReportingFunctions.fn_completetestcase();

//*******Case 1 Ende

//*******Case 2
  // Test Case #2
  ReportingFunctions.setTestCaseExeStartTime(aqDateTime.Now());
  ReportingFunctions.fn_createtestcasedescription("Module2", "TestCaseID2", "TestCaseDescription2", "SYS");
  
          // Aufruf deiner Funktion CheckAndOpenEdge
          Reading();
          ReportingFunctions.fn_createteststep(1, "Expected Result", "Actual Result", "Test Data", false);
  
          // Aufruf deiner Funktion Hull
          Hull();
          ReportingFunctions.fn_createteststep(1, "Expected Result", "Actual Result", "Test Data", false);

  ReportingFunctions.setTestCaseExeEndTime(aqDateTime.Now());
  ReportingFunctions.fn_createtestcaseduration();
  ReportingFunctions.fn_completetestcase();
//*******Case 2Ende
  




  
  
  // Schluß von Testen
  ReportingFunctions.setExecutionEndTime(aqDateTime.Now());
  ReportingFunctions.fn_generatehighlevelreport();
      
}

//USEUNIT ReportingFunctions
function SampleCallMethod()
{

//      ReportingFunctions.setLogsPath("C:\\AutomationLogs\\")
      ReportingFunctions.setLogsPath("B:\\TestCompletePro\\CreateOutput\\Reports\\");
//      ReportingFunctions.setExecutionStartTime(aqDateTime.Time())
      ReportingFunctions.setExecutionStartTime(aqDateTime.Now())

      //Test Case #1
      ReportingFunctions.setTestCaseExeStartTime(aqDateTime.Time())
      ReportingFunctions.fn_createtestcasedescription("Module1","TestCaseID","TestCaseDescription","SYS");
      ReportingFunctions.fn_createteststep(1,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(2,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(3,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(2,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(1,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.setTestCaseExeEndTime(aqDateTime.Time());
      ReportingFunctions.fn_createtestcaseduration()
      ReportingFunctions.fn_completetestcase()


      
      //Test Case #2
      ReportingFunctions.setTestCaseExeStartTime(aqDateTime.Time());
      ReportingFunctions.fn_createtestcasedescription("Module2","TestCaseID2","TestCaseDescription","SYS");
      ReportingFunctions.fn_createteststep(1,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(2,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(3,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(2,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.fn_createteststep(1,"Expe Result","Actual Result","Test Data",false);
      ReportingFunctions.setTestCaseExeEndTime(aqDateTime.Time());
      ReportingFunctions.fn_createtestcaseduration()
      ReportingFunctions.fn_completetestcase()

      ReportingFunctions.setExecutionEndTime(aqDateTime.Time())
      ReportingFunctions.fn_generatehighlevelreport()
}