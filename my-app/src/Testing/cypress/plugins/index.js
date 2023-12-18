const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.transform[1][1].babelrc = true;
  options.browserifyOptions.plugin.unshift(['tsify']);

  // Cucumber preprocessor
  on('file:preprocessor', cucumber(options));

  return config;
};
