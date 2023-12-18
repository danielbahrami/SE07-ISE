const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement the Cucumber preprocessor configuration here
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },  
    baseUrl: 'http://localhost:3000', // Replace with your app's base URL
    specPattern: 'cypress/integration/**/*.feature',
    // Add other configurations as needed
  },
  // If you're using Cypress with Cucumber, add the plugin setup here
});
