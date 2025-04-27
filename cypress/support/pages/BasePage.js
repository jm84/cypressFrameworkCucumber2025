class BasePage {
 
    // Method to return common functionalities
    getCommonFeatures() {
        return {
            waitForElement: (selector, timeout = 5000) => {
                cy.get(selector, { timeout }).should('be.visible');
            },
            clickElement: (selector) => {
                cy.get(selector).click();
            },
            typeText: (selector, text) => {
                cy.get(selector).type(text);
            },
            verifyText: (selector, expectedText) => {
                cy.get(selector).should('have.text', expectedText);
            }
        };
    }
}

export default BasePage;