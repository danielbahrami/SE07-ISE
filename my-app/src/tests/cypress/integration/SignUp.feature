Feature: Signup for RoomieMatch

  Scenario: Successful signup with valid credentials
    Given I am on the signup page
    When I enter valid credentials
    And I submit the form
    Then I should be redirected to the dashboard page

  Scenario: Unsuccessful signup with invalid email
    Given I am on the signup page
    When I enter an invalid email
    And I submit the form
    Then I should see an error message about invalid email
