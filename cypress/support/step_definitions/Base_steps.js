// Import the necessary libraries and modules
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {  
  cy.log("Before each scenario");
  // Add any setup code you need to run before each scenario here
  // For example, you can clear cookies or local storage
  cy.clearCookies();
  cy.clearLocalStorage();
});
