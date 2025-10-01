/**
 * Fetches all data from the Construflow API
 * | Function triggered when called by another function
 * | Last update: 06/28/2024
 * @param {string} relativePath Parameter relativePath: Desired endpoint for the request. Default is an empty string.
 * @param {number} after Parameter after: Initial page number of Construflow to be queried. Default is 0.
 * @param {string} templateVersion Parameter templateVersion: Construflow version to be queried via the API. Default is version 5.0.0.
 * @param {number} retries Parameter retries: Initial number of attempts to show in the final Logger. Default is 0.
 */
function getFromAPI(relativePath = '', after = 0, templateVersion = "5.0.0", retries = 0){

  let includeHeader = after === 0 ? "true" : "false";
  let apiUrl = `${apiBaseUrl}/data-lake/${relativePath}?templateVersion=${templateVersion}&connectorVersion=${connectorVersion}&page[size]=${pageSize}&page[after]=${after}&page[include_header]=${includeHeader}`;

  let options = {
    "method": "get",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Basic ${base64Auth}`
    },
    "muteHttpExceptions": true
  };

  try {
    let response = UrlFetchApp.fetch(apiUrl, options);
    let responseCode = response.getResponseCode();
    let responseBody = response.getContentText();

    if (responseCode === 504 && retries < maxRetries) {
      Utilities.sleep(retryDelay);
      return getFromAPI(relativePath, after, templateVersion, retries + 1);
    }

    if (responseCode !== 200) {
      throw new Error(`HTTP Error: ${responseCode} - ${responseBody}`);
    }

    let jsonResponse;
    try {
      jsonResponse = JSON.parse(responseBody);
    } catch (e) {
      throw new Error(`Failed to parse JSON response: ${responseBody}`);
    }

    let hasMore = jsonResponse.meta && jsonResponse.meta.has_more;
    let data = jsonResponse.data;

    if (hasMore) {
      let nextAfter = jsonResponse.meta.after_cursor;
      let additionalData = getFromAPI(relativePath, nextAfter, templateVersion);
      data = data.concat(additionalData);
    }    
    return data;
  } 
  catch (error) {
    throw new Error(`Request failed after ${retries} retries: ${error.message}`);
  }
}

/**
 * Intermediate function that receives the endpoint and sets the parameters for querying the Construflow API
 * | Function triggered when called by another function
 * | Last update: 06/28/2024
 * @param {string} content Parameter content: Desired endpoint for the request. Default is an empty string.
 */
function getData(content = ''){
  Logger.log('Início da requisição de dados')
  const templateVersion = "7.0.0";
  Logger.log('Fim da requisição de dados') 
  return getFromAPI(content, 0, templateVersion);
}
