import { When , Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

When('I am on the login page', () => {
    loginPage.visitLoginPage();
});


When('I type in the username {string}', (username) => {
    loginPage.fillUserName(username); 
});

When('I type in the password {string}',( password)=>{
    loginPage.fillPassword(password);    
})

When('I click on the login button', () => {
    loginPage.clickOnLoginButton(); 
});

Then('I should see {string} in alert box', (message) => {
    loginPage.validateAlertMessage(message); 
});


