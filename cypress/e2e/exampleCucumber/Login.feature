Feature: Validate Login Page

    Feature Description: This feature file contains scenarios to validate the login page of the application.
    Background:
        Given I am on the login page

    Scenario Outline: valid and invalid login attempts
        Given I am on the login page
        When I type in the username "<username>"
        And I type in the password "<password>"
        And I click on the login button
        Then I should see "<message>" in alert box
        Examples:
            | username    | password      | message              |
            | webdriver   | webdriver123  | validation succeeded |
            | invaliduser | wrongpassword | validation failed    |
