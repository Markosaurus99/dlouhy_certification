const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    tegb_banking_url: "https://tegb-frontend-88542200c6db.herokuapp.com",
    tegb_banking_api_url: "https://tegb-backend-877a0b063d29.herokuapp.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    requestTimeout: 15000,
    pageLoadTimeout: 60000,
    baseUrl: "https://tredgate.com/pmtool/",
  },
});
