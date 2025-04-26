Feature: Contact Us Form

    Scenario: Submit the Contact Us form successfully
        Given I am on the Contact Us page
        When I fill in the form with valid details
            | Name     | John Doe                       |
            | lastName | john@example.com               |
            | Email    | Hello, this is a test message. |
            | Comments | 1234567890                     |
        And I submit the form
        Then I should see a confirmation message saying "Thank you for contacting us!"