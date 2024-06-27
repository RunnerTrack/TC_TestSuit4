var skripte=require("base64");
// Jira-Modul importieren (falls vorhanden)
var Jira = require("jira-module");

function IssueToJira() {
    // Bei Jira anmelden
    Jira.Login("https://mycompany.atlassian.net", "John.Smith@mycompany.com", "c40Mwj3PovmRTFZbmIiwB8C2");

    // Informationen für die Aufgabe definieren
    var priorityJSON = '{"name": "Low"}';
    var jiraData = Jira.CreateNewIssueData("MyJiraProjectKey", "Task")
        .setField("summary", "Dies ist eine Beispielaufgabe")
        .setField("description", "Beispielbeschreibung")
        .setFieldJSON("priority", priorityJSON);

    // Aufgabe an Jira senden
    var key = Jira.PostIssue(jiraData);

    // Datei an die erstellte Aufgabe anhängen
    Jira.PostAttachment(key, "C:\\temp\\MyFile.txt");

    // Priorität aktualisieren
    var upPriorityJSON = '{"name": "High"}';
    var upJiraData = Jira.CreateUpdateIssueData().setFieldJSON("priority", upPriorityJSON);
    Jira.UpdateIssue(key, upJiraData);
}


// Beispielaufruf der Funktion mit Benutzernamen und API-Token
var username = "TC_Jira_Token";
var apiToken = Project.Variables.TC_Jira_Token;
//var encodedCredentials = encodeCredentials(username, apiToken);
