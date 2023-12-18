import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the signup page', () => {
  cy.visit('/signup'); // Adjust URL to your app's signup page
});

When('I enter valid credentials', () => {
  cy.get('input[name="fullName"]').type('Kim Taylor');
  cy.get('input[name="email"]').type('kim@example.com');
  cy.get('input[name="password"]').type('Password123');
  cy.get('input[name="age"]').type('25');
  cy.get('input[name="occupation"]').type('Software Developer');
  cy.get('input[name="searchArea"]').type('Downtown');
  cy.get('input[name="hobbies"]').type('Cooking, Hiking');

  // Assuming these are implemented as text inputs or searchable/selectable inputs
  cy.get('input[name="gender"]').type('Female');
  cy.get('input[name="tidiness"]').type('Neat');
  cy.get('input[name="pets"]').type('None');
  cy.get('input[name="socialInterests"]').type('Introvert');
  // Fill in other necessary fields
});

When('I submit the form', () => {
  cy.get('form').submit();
});

Then('I should be redirected to the dashboard page', () => {
  cy.url().should('include', '/');
});

// Add step definitions for other scenarios
When('I enter an invalid email', () => {
  cy.get('input[name="email"]').type('invalid-email'); // Deliberately enter an invalid email
  cy.get('input[name="password"]').type('Password123');
  // Fill in other required fields similarly
  cy.get('button[type="submit"]').click()
});

Then('I should remain on the signup page', () => {
  cy.url().should('include', '/signup'); // Verify that the URL still includes '/signup'
});

And('I should see an error message about invalid email', () => {
  cy.contains('mailadressen skal indeholde').should('be.visible'); // Adjust to match your application's error message
});