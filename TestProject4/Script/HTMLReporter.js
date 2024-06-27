function HTMLReport()
{
  HTMLUtilities.CompanyName="TestComplete";
}
// Script routine to populate custom fields
function UpdateCustomFields() {
  // Get the current test object
  var test = Project.ActiveTest;

  // Get custom fields
  var myCustomField1 = test.CustomFields("MyCustomField1");
  var myCustomField2 = test.CustomFields("MyCustomField2");

  // Populate custom fields with data
  myCustomField1.Value = "Custom Field 1 Value";
  myCustomField2.Value = "Custom Field 2 Value";
}

// Modify Report.OnTestEnd event handler
Report.OnTestEnd = function(test) {
  // Call script routine to populate custom fields
  UpdateCustomFields();

  // Modify report template (replace with your actual template modifications)
  var reportTemplate = Report.ReportTemplate;
  reportTemplate += "\nCustom Field 1: " + test.CustomFields("MyCustomField1").Value;
  reportTemplate += "\nCustom Field 2: " + test.CustomFields("MyCustomField2").Value;
};