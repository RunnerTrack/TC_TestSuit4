function Reading()
{
    Project.Variables.data_sourcing.Reset();
  for(RecordIdx = 1; RecordIdx < 2; RecordIdx++)
    Project.Variables.data_sourcing.Next();
  for(; !Project.Variables.data_sourcing.IsEOF();)
  {
    //Posts an information message to the test log.
//kg    Log.Message(Project.Variables.ballVariable, Project.Variables.data_sourcing.Value("FirstName"), Project.Variables.data_sourcing.Value("LastName"), Project.Variables.data_sourcing.Value("Address"), Project.Variables.data_sourcing.Value("City"), Project.Variables.data_sourcing.Value("Country"));
    Log.Message(Project.Variables.data_sourcing.Value("FirstName")+" / "+  Project.Variables.data_sourcing.Value("LastName")+" / "+  Project.Variables.data_sourcing.Value("Address")+" / "+  Project.Variables.data_sourcing.Value("City")+" / "+ Project.Variables.data_sourcing.Value("Country"));
    Project.Variables.data_sourcing.Next();
  }
  
//kg  let defBall="Defining Balls which are used";
  //kg Log.Message("defBall:"+defBall);
}