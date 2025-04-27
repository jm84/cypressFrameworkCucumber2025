import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = Cypress.config("baseUrl");
Given("I am on the Contact Us page", () => {
    cy.visit(url);    
    cy.get('#contact-us').invoke("removeAttr","target").click();
});


When("I submit the form", () => {
    cy.get("form").submit();
});

Then('I should see a confirmation message saying {string}', (message) => {
    cy.contains(message).should('be.visible');
});