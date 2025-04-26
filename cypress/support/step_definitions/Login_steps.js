import { When , Then} from "@badeball/cypress-cucumber-preprocessor";

const url = Cypress.config("baseUrl");
let stub;

When('I am on the login page', () => {
    cy.visit(url);    
    cy.get('#login-portal').invoke("removeAttr","target").click();
});


When('I type in the username {string}', (username) => {
    cy.get('#text').type(username); // Replace '#username' with the actual selector for the username field
});

When('I type in the password {string}',( password)=>{
    cy.get('#password').type(password); // Replace '#password' with the actual selector for the password field

})

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub); // Stubbing the alert to capture its text
    cy.get('#login-button').click(); // Replace '#login' with the actual selector for the login button
});

Then('I should see {string} in alert box', (message) => {
    expect(stub.getCall(0)).to.be.calledWith(message); // Verifying the alert message
});


