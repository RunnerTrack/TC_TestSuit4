﻿function starting()
{
// Project-level OnStartTest functionality (replace with your actual logic)
aqProject.OnTestStart.js = function(sender, test) {
  Log.Message("Test: " + test.Name + " has started!");
  
  // Your code to be executed at test start (common for all tests in Test_Rot)
  // For example, setting up test data or initializing variables
};
}
function Test() {
  Log.Message("# of Items:"+Project.TestItems.ItemCount);

  // Iterates through test items
  for (let i = 0; i < Project.TestItems.ItemCount; i++)
    LogTestItemInfo(Project.TestItems.TestItem(i));

  // Call the Test_Rot script
  aqRunner.RunScript("Test_Rot"); // Assuming Test_Rot.js exists
}

function EventControl1_OnStartTest(Sender)
{
  Log.Message("EventHandler2");
  
}

function EventControl1_OnStartTestCase(Sender, StartTestCaseParams)
{
  Log.Message("EventHandler3");
  
}