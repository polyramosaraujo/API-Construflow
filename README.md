# 📊 Data Extraction System from Construflow API to Google Sheets

This system was developed in Google Apps Script with the goal of automating the collection and organization of data from the Construflow API, filling different tabs of a Google Sheets spreadsheet.


## 🚀 How It Works

The system is divided into four main parts:

1. **Constants**
- Defines the main system settings, such as connector and template version, base API URL, base64-encoded credentials, maximum number of attempts, page size for paginated requests, and references to the spreadsheet tabs that will be filled
  
2. **General Request (`getFromAPI`)**
- Responsible for making GET requests to the Construflow API, with support for **automatic pagination** and **retries** in case of errors.
  
3. **Intermediate Function (`getData`)**
- Function that defines the API template version and calls `getFromAPI()`.
  
4. **Specific Requests by Endpoint**  
   (`getProjects`, `getCompanies`, etc)
- Each function collects data from an API endpoint and fills a specific tab in the spreadsheet.


## 📅 Last Update

29/11/2024


## 👨‍💻 Author

Polyana Ramos Araújo
