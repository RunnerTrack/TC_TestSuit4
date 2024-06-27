//USEUNIT ReportingFunctions
function Sample_Start()
{

//      ReportingFunctions.setLogsPath("C:\\AutomationLogs\\")
      ReportingFunctions.setLogsPath("B:\\TestCompletePro\\CreateOutput\\Reports\\");
//      ReportingFunctions.setExecutionStartTime(aqDateTime.Time())
      ReportingFunctions.setExecutionStartTime(aqDateTime.Now());

}