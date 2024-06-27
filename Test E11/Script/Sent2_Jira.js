// Laden Sie die base64.js-Bibliothek
//eval(File.read("base64.js")); // Ersetzen Sie "Pfad/zur/base64.js" durch den tatsächlichen Pfad zur base64.js-Datei
var skript=require("base64");

// Beispielaufruf der Funktion mit Testergebnissen
var testResults = "Hier sind die Testergebnisse...";
function sendJira() {
    sendTestResultsToJira(testResults);
}

// Funktion zur Kodierung von Anmeldeinformationen mit Base64
function encodeCredentials(username, apiToken) {
    var credentials = username + ":" + apiToken;
    var base64Credentials =skript.encode(credentials);
    return base64Credentials;
}

// Funktion zum Senden der Testergebnisse an Jira
function sendTestResultsToJira(testResults) {
    var url = "https://berryerric.atlassian.net/rest/api/2";
    var username = "TC_Jira_Token";
    username="berryerric@gmail.com";
    var apiToken = Project.Variables.TC_Jira_Token;
    var auth = "Basic " + encodeCredentials(username, apiToken);

    var requestBody = {
        "fields": {
            "project": {
                "key": "PROJECT_KEY"
            },
            "summary": "Test Results",
            "description": testResults,
            "issuetype": {
                "name": "Bug"
            }
        }
    };

    // Erstellen der HTTP-Anfrage
    var request = Sys.Browser().Navigate(url, "POST", JSON.stringify(requestBody), {
        "Authorization": auth,
        "Content-Type": "application/json"
    });

    // Überprüfen der Antwort
    if (request.StatusCode == 201) {
        Log.Message("Testergebnisse erfolgreich an Jira gesendet!");
    } else {
        Log.Error("Fehler beim Senden der Testergebnisse an Jira. Statuscode: " + request.StatusCode + ", Antwort: " + request.ResponseBody);
    }
}

