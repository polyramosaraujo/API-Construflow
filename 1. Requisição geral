/**
 * Pega todos os dados da API do Construflow 
 * | Função acionada quando chamada por outra função 
 * | Última atualização: 28/06/2024 
 * @param {string} relativePath Parâmetro relativePath: End point desejado para a requisição. Default é uma string vazia.
 * @param {number} after Parâmetro after: Número inicial da página do Construflow a qual será consultada. Default é o número 0.
 * @param {string} templateVersion Parâmetro templateVersion: Versão do Construflow a qual será consultada a API. Default é a versão 5.0.0.
 * @param {number} retries Parâmetro retries: Número inicial de tentativas para apresentar no Logger final. Default é o número 0.
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
 * Função intermediária que recebe o end point e define os parâmetros para consulta da API do Construflow 
 * | Função acionada quando chamada por outra função 
 * | Última atualização: 28/06/2024 
 * @param {string} content Parâmetro content: End point desejado para a requisição. Default é uma string vazia.
 */
function getData(content = ''){
  Logger.log('Início da requisição de dados')
  const templateVersion = "7.0.0";
  Logger.log('Fim da requisição de dados') 
  return getFromAPI(content, 0, templateVersion);
}
