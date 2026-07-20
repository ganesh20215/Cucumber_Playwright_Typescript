Feature: Login Functionality

   Scenario: verify login component of sauce demo application
    Given user open sauce demo application
     When click on login button without entering username and password
     Then verify error message populate on login page