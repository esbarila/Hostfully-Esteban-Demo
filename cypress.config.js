const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    baseUrl: "https://computer-database.gatling.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
