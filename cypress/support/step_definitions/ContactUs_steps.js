import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
When('I fill in the form with valid details', (dataTable) => {
    const data = dataTable.hashes();
    cy.get('[name="first_name"]').type(data.Name);
    cy.get('[name="last_name"]').type(data.lastName);
    cy.get('[name="email"]').type(data.Email);
    cy.get('textarea.feedback-input').type(data.Comments);
});