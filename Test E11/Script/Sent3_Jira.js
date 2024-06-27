// Assuming `js-base64.js` is included using a separate library file (my-libraries.js)
var base64 = require("base64");
var username = "berryerric@gmail.com";
var apiToken = Project.Variables.TC_Jira_Token;

function encodeCredentials(username, apiToken) {
  var credentials = username + ":" + apiToken;
  var base64Credentials = base64.encode(credentials);
  return base64Credentials;
}

function sendTestResultsToJira(testResults, issueId) {
  // Check for empty test results
  if (!testResults || testResults.trim() === "") {
    Log.Error("Test results are empty.");
    return;
  }

  var url = "https://berryerric.atlassian.net/rest/api/3/issue/" + issueId + "/comment";
  var auth = "Basic " + encodeCredentials(username, apiToken);

  // Well-formed JSON request body for a comment
  var requestBody = JSON.stringify({
    "body": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": testResults,
              "type": "text"
            }
          ]
        }
      ]
    }
  });

  // Create and configure the HTTP request
  var httpRequest = aqHttp.CreatePostRequest(url, requestBody);
  httpRequest.SetHeader("Authorization", auth);
  httpRequest.SetHeader("Content-Type", "application/json");

  // Send the request and handle the response
  httpRequest.Send();

  httpRequest.OnResponse = function(response) {
    var responseStatusCode = response.StatusCode;
    var responseBody = response.ResponseBody;

    if (responseStatusCode == 201) {
      Log.Message("Testergebnisse erfolgreich als Kommentar an Jira-Issue " + issueId + " gesendet!");
    } else {
      Log.Error("Fehler beim Senden der Testergebnisse an Jira. Statuscode: " + responseStatusCode + ", Antwort: " + responseBody);

      // Additional debugging information
      Log.Error("Response Headers: " + JSON.stringify(response.ResponseHeaders));
      Log.Error("Request Body: " + requestBody);
      Log.Error("Authorization Header: " + auth);
    }
  };
}

// Example usage: Replace "Hier sind die Testergebnisse..." with your actual test results
var testResults = "Hier sind die Testergebnisse...";
var issueId = "WAFA-1"; // Replace with the actual Jira issue ID
function starting(){
sendTestResultsToJira(testResults, issueId);
}
