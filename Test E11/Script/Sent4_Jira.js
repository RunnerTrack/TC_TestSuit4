﻿// Laden der base64.js-Bibliothek
var base64 = require("base64");

// Funktion zur Kodierung von Anmeldeinformationen mit Base64
function encodeCredentials(username, apiToken) {
    var credentials = username + ":" + apiToken;
    var base64Credentials = base64.encode(credentials);
    return base64Credentials;
}

// Funktion zum Senden von Testergebnissen an Jira
function sendTestResultsToJira(testResults) {
//    var url = "https://berryerric.atlassian.net/rest/api/3/issue/10000/comment";
    var url = "https://berryerric.atlassian.net/";
    var username = "berryerric@gmail.com";
    var apiToken = Project.Variables.TC_Jira_Token; // Stellen Sie sicher, dass dieser Wert korrekt ist
    var auth = "Basic " + encodeCredentials(username, apiToken);

    var requestBody = JSON.stringify({ "body": testResults });
    var winHttpRequest = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
    winHttpRequest.Open("POST", url, false);
    winHttpRequest.SetRequestHeader("Authorization", auth);
    winHttpRequest.SetRequestHeader("Content-Type", "application/json");
    winHttpRequest.Send(requestBody);

    // Überprüfen der Antwort
    if (winHttpRequest.Status == 201) {
        Log.Message("Testergebnisse erfolgreich als Kommentar an Jira-Issue gesendet!");
    } else {
        Log.Error("Fehler beim Senden der Testergebnisse an Jira. Statuscode: " + winHttpRequest.Status + ", Antwort: " + winHttpRequest.ResponseText);
    }
    
}

// Beispielaufruf der Funktion mit Testergebnissen
var testResults = "Hier sind die Testergebnisse...";
function ss(){
sendTestResultsToJira(testResults);
}
