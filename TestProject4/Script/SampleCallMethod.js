﻿//USEUNIT ReportingFunctions
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