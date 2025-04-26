Feature: Contact Us Form

    Scenario: Submit the Contact Us form successfully
        Given I am on the Contact Us page
        When I fill in the form with valid details
            | Field       | Value           |
            | Name        | John Doe        |
            | Email       | john@example.com|
            | Message     | Hello, this is a test message. |
        And I submit the form
        Then I should see a confirmation message saying "Thank you for contacting us!"