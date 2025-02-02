﻿function LogResultsExample()
 {
   // Obtains a collection of logs
   var LogsCol = Project.Logs;
   // Obtains the total number of log items in the collection
   var Num = LogsCol.LogItemsCount;
   
   if ( Num > 0 )
   {
     // Iterates through the items
     for (var i = 0; i < Num; i++)
     {
       var LogItem = LogsCol.LogItem(i);
       var Name = LogItem.Name;
       var Status = LogItem.Status;
       Log.Message("The " + Name + " item has the following status: " + Status);
     }
   }
   else 
     Log.Message("The collection has no log items.");

 }