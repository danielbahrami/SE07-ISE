import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the signup page', () => {
  cy.visit('/signup'); // Adjust URL to your app's signup page
});

When('I enter valid credentials', () => {
  cy.get('input[name="email"]').type('testuser@example.com');
  cy.get('input[name="password"]').type('password123');
  // Fill in other necessary fields
});

When('I submit the form', () => {
  cy.get('form').submit();
});

Then('I should be redirected to the dashboard page', () => {
  cy.url().should('include', '/dashboard');
});

// Add step definitions for other scenarios
