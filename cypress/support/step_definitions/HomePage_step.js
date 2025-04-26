import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = Cypress.config("baseUrl");
Given("I am on the Contact Us page", () => {
    cy.visit("/contact-us");
});

When('I fill in the form with valid details', (dataTable) => {
    const data = dataTable.hashes()[0];
    cy.get('input[name="name"]').type(data.Name);
    cy.get('input[name="email"]').type(data.Email);
    cy.get('textarea[name="message"]').type(data.Message);
});

When("I submit the form", () => {
    cy.get("form").submit();
});

Then('I should see a confirmation message saying {string}', (message) => {
    cy.contains(message).should('be.visible');
});