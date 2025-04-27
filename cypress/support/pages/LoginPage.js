import BasePage from "./BasePage";
const url = Cypress.config("baseUrl");

class LoginPage extends BasePage {

    constructor() {
        super();
        this.stub = null;
    }
    visitLoginPage() {
        cy.visit(url);
        cy.get('#login-portal').invoke("removeAttr", "target").click();
    }

    fillUserName(username) {
        cy.get('#text').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickOnLoginButton() {
        this.stub = cy.stub(); // Initialize the stub here
        cy.on('window:alert', this.stub); // Stubbing the alert to capture its text
        cy.get('#login-button').click();
    }

    assertLoginSuccess() {
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome back').should('be.visible');
    }
    validateAlertMessage(message) {
        expect(this.stub.getCall(0)).to.be.calledWith(message);
    }
}
export default LoginPage;