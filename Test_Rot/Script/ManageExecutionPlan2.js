﻿function Test() {
  // Iterates through test items
  for (i = 0; i< ProjectSuite.TestItems.ItemCount; i++) {
    LogTestItemInfo(ProjectSuite.TestItems.TestItem(i));
  }
}

function LogTestItemInfo(ATestItem) {
  // Prints the test item name
  Log.AppendFolder(ATestItem.ProjectName);
  // Prints the test item description
  Log.Message(ATestItem.Description);
  // Prints the corresponding project location
  Log.Message(ATestItem.ProjectLocation);
  // Determines whether the current test item is enabled
  Log.Message(ATestItem.Enabled);
  // Obtains the test item’s StopOnError property value
  Log.Message(ATestItem.StopOnError);
  // Prints the test item’s timeout
  Log.Message(ATestItem.Timeout);
  Log.PopLogFolder();
}

