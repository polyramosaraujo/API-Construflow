const connectorVersion = "3.0.0";
const apiBaseUrl = "https://api.construflow.com.br";
const base64Auth = Utilities.base64Encode(`${'login'}:${'senha'}`);

const maxRetries = 3;
const retryDelay = 1000; //1 segundo
const pageSize = 500;

const abaProjetos = SpreadsheetApp.getActive().getSheetByName('Projetos')
const abaEmpresas = SpreadsheetApp.getActive().getSheetByName('Empresas')
const abaUsuarios = SpreadsheetApp.getActive().getSheetByName('Usuários')
const abaLocais = SpreadsheetApp.getActive().getSheetByName('Locais')
const abaDisciplinas = SpreadsheetApp.getActive().getSheetByName('Disciplinas')
const abaFases = SpreadsheetApp.getActive().getSheetByName('Fases')
const abaCategorias = SpreadsheetApp.getActive().getSheetByName('Categorias')
const abaEtiquetas = SpreadsheetApp.getActive().getSheetByName('Etiquetas')
const abaApontamentos = SpreadsheetApp.getActive().getSheetByName('Apontamentos')
const abaApontamentosLocais = SpreadsheetApp.getActive().getSheetByName('Apontamentos x Locais')
const abaApontamentosDisciplinas = SpreadsheetApp.getActive().getSheetByName('Apontamentos x Disciplinas')
const abaApontamentosEtiquetas = SpreadsheetApp.getActive().getSheetByName('Apontamentos x Etiquetas')
const abaHistorias = SpreadsheetApp.getActive().getSheetByName('Histórias')
const abaComentarios = SpreadsheetApp.getActive().getSheetByName('Comentários')
const abaLoginsAcesso = SpreadsheetApp.getActive().getSheetByName('Logins de acesso')
