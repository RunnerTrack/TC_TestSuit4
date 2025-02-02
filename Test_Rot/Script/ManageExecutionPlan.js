﻿function Test() {
    Log.Message("# of Items:"+Project.TestItems.ItemCount);

    // Iterates through test items
    for (let i = 0; i < Project.TestItems.ItemCount; i++)
        LogTestItemInfo(Project.TestItems.TestItem(i));

}

function LogTestItemInfo(ATestItem) {
    var TestItemInfo;

    // Obtains the test item name
    TestItemInfo = "Name: " + ATestItem.Name + "\r\n";

    // Obtains the test item description
    TestItemInfo = TestItemInfo + "Description: " + ATestItem.Description + "\r\n";

    // Obtains the name of the test run by the test item
    TestItemInfo = TestItemInfo + "Test: ";

    if (!strictEqual(ATestItem.ElementToBeRun, null))
        TestItemInfo = TestItemInfo + ATestItem.ElementToBeRun.Caption + "\r\n"
    else
        TestItemInfo = TestItemInfo + "not specified" + "\r\n";

    // Obtains the name of the parent item of the current test item
    TestItemInfo = TestItemInfo + "Parent: ";

    if (!strictEqual(ATestItem.Parent, null))
        TestItemInfo = TestItemInfo + ATestItem.Parent.Name + "\r\n"
    else
        TestItemInfo = TestItemInfo + "none" + "\r\n";

    // Determines whether the current test item is enabled
    TestItemInfo = TestItemInfo + "Enabled: " + ATestItem.Enabled + "\r\n";

    // Obtains the test item’s StopOnError property value
  TestItemInfo = TestItemInfo + "On error: ";
  switch (ATestItem.StopOnError)
    {     case 0:
      TestItemInfo = TestItemInfo + "Continue running" + "\r\n";
      break;
    case 1:
      TestItemInfo = TestItemInfo + "Stop project" + "\r\n";
      break;
    case 2:
      TestItemInfo = TestItemInfo + "Stop current item" + "\r\n";
      break;
    case 3:
      TestItemInfo = TestItemInfo + "Use project's On error property" + "\r\n";
      break;
    }

  // Obtains the test item’s StopOnException property value
  TestItemInfo = TestItemInfo + "On exception: ";
  switch (ATestItem.StopOnException)
    {
    case 0:
      TestItemInfo = TestItemInfo + "Continue running" + "\r\n";
      break;
    case 1:
      TestItemInfo = TestItemInfo + "Stop project" + "\r\n";
      break;
    case 2:
      TestItemInfo = TestItemInfo + "Stop current item" + "\r\n";
      break;
    }

  // Obtains the amount of time the test item is executed
  TestItemInfo = TestItemInfo + "Count: " + ATestItem.Count + "\r\n";

  // Obtains the test item’s timeout
  TestItemInfo = TestItemInfo + "Timeout: " + ATestItem.Timeout + "\r\n";

  // Checks if the test item is currently running
  TestItemInfo = TestItemInfo + "Is currently running: ";
  if (ATestItem.Iteration > 0)
    TestItemInfo = TestItemInfo + "yes"
  else
    TestItemInfo = TestItemInfo + "no";

  // Posts test item information to the test log
  Log.AppendFolder(ATestItem.Name, TestItemInfo);

  // Iterates through the child items of the current test item
  for (let i = 0; i < ATestItem.ItemCount; i++)

    // Posts information on the current test item’s child items to the test log
    LogTestItemInfo(ATestItem.TestItem(i));
  Log.PopLogFolder();
}


function EventControl_OnStartTest2(Sender)
{
  Log.Message("Beginning of Event Handler");
  try
  {    
    Log.AppendFolder("< EventControl_OnStartTest >");
      Log.AppendFolder("Version Information");
        var FileName = "C:\\Program Files (x86)\\Some Folder\\TestedApp.exe";
        var VerInfo = aqFileSystem.GetFileInfo(FileName).VersionInfo;
        var FileInf = aqFileSystem.GetFileInfo(FileName);
        var HostName = Sys.HostName;
        var dtObj; 
        Log.Message("File Name: " + FileInf.Name);
        Log.Message("File Version: " + VerInfo.FileMajorVersion + "." + VerInfo.FileMinorVersion + "." + VerInfo.FileBuildVersion + "." + VerInfo.FileRevisionVersion);
        dtObj = new Date(FileInf.DateLastModified);
        Log.Message("File Date: " + FileInf.DateLastModified);
        Log.Message("Host Name: " + HostName);
      Log.PopLogFolder();
  }
  catch(err)
  {
    Process.Halt("Exception: EventControl_OnStartTest - " + err.message);  //Stop Test Run.
  }
}

function OnStartTest_OnStartTestCase(Sender, StartTestCaseParams)
{
  Log.Message("OnStartTest_OnStartTestCase");
}