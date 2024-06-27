//USEUNIT ReportingFunctions
function Sample_End()
{

    
      ReportingFunctions.setExecutionEndTime(aqDateTime.Time())
      ReportingFunctions.fn_generatehighlevelreport()

}