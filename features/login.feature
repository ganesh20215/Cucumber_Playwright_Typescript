Feature: Login Functionality


Background: 
    Given user open sauce demo application

    Rule: This is just demo rule

  #  Scenario: verify login component of sauce demo application
  #    When click on login button without entering username and password
  #    Then verify error message populate on login page

  #  Scenario: verify login with blank inputs application
  #    When click on login button without entering username and password
  #    Then verify error message populate on login page

  #  Scenario: verify login with valid username and valid passoword
  #    When Enter username in username textbox
  #   And Enter password in password textbox
  #    Then Then click on the login button

  @smoke
   Scenario: verify login with valid username and valid passoword
     When Enter username in username textbox "standard_user"
    And Enter password in password textbox "secret_sauce"
     Then Then click on the login button

  @nagative
   Scenario Outline: verify login with invalid credentials
     When Enter username in username textbox "<username>"
    And Enter password in password textbox "<password>"
     Then Then click on the login button
     Examples:
     | username | password |
     | standard_user | test |
     | test | secret_sauce |
     | test | test |
