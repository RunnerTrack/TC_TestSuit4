﻿function Login_Ausfuehren() {
//  let url = "http://win2016-vss:2980/MiFID/";
  let url = Project.Variables.UrlAdress;
  let browse = Sys.Browser();
  let anmeldeFrame = browse.Page(url).FindElement("frame[@name='Anmeldung']");
  
  let userIdField = anmeldeFrame.FindElement("//input[@name='userid']");
  let passwordField = anmeldeFrame.FindElement("//input[@name='password']");
  let institutsnrField = anmeldeFrame.FindElement("//input[@name='institutsnr']");
  let submitButton = anmeldeFrame.FindElement("//input[@type='image']");

  /*  
  userIdField.SetText("94012");
  passwordField.SetText(Project.Variables.Password1);
  institutsnrField.SetText("71000");
  */
  let userNo=Project.Variables.StartUsername;
  userIdField.SetText(userNo);
  let userPass=Project.Variables.GetVariableDefaultValue("Pass"+userNo);
  passwordField.SetText(userPass);
  institutsnrField.SetText(Project.Variables.InstituteNo);
  submitButton.Click();
  Delay(100);
}