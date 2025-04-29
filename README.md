# 📊 Sistema de Extração de Dados da API Construflow para Google Sheets

Este sistema foi desenvolvido em **Google Apps Script** com o objetivo de automatizar a coleta e organização de dados da **API do Construflow**, preenchendo diferentes abas de uma **planilha do Google Sheets**.

## 🚀 Funcionamento

O sistema é dividido em quatro partes principais:

1. **Constantes**
- Define as configurações principais do sistema, como versão do conector e do template, URL base da API, credenciais codificadas em base64, número máximo de tentativas, tamanho das páginas para requisições paginadas e referências às abas da planilha que serão preenchidas
  
2. **Requisição Geral (`getFromAPI`)**
- Responsável por fazer requisições GET para a API do Construflow, com suporte à **paginação automática** e **retries** em caso de erro.
  
3. **Função Intermediária (`getData`)**
- Função que define a versão do template da API e chama `getFromAPI()`.
  
4. **Requisições Específicas por Endpoint**  
   (`getProjects`, `getCompanies`, etc)
- Cada função coleta dados de um endpoint da API e preenche uma aba específica da planilha.

## 📅 Última Atualização

**28/06/2024**

## 👨‍💻 Autora

Polyana Ramos Araújo
