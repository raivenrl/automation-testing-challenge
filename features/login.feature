Feature: Login to Swag Labs

  Scenario Outline: Login with different users
    Given I am on the Swag Labs login page
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should be on the inventory page

  Examples:
    | username               | password      |
    | standard_user          | secret_sauce  |
    | locked_out_user        | secret_sauce  |
    | problem_user           | secret_sauce  |
    | performance_glitch_user| secret_sauce  |
    | error_user             | secret_sauce  |
    | visual_user            | secret_sauce  |
