const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tiendaonline.movistar.com.ar',
    specPattern: 'cypress/e2e/**/*.spec.js', // this ensures cp001.spec.js is picked up
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Node event listeners here
    },
  },
});