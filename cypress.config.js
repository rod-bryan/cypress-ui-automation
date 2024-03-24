const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    env: {
      "allureResultsPath": "allure-results",
      "allure": true,
      "allureLogCypress": true,
      "allureAttachRequests": true,
      "allureAddVideoOnPass": true,
      "allureAddAttachmentOnPass": true,
      "allureAttachRequests": true,
     
  
  },
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    
  },

 

});
