Feature: Adding a New computer
    As a user I want to be able to add a new computer to the database

    Scenario: Successful creation
    Given User is on the computers section
    When User clicks "Add a New Computer"
    And User types a Name
    And User clicks "Create this computer"
    Then the computer is created and the only required field is Name
    Then User is sent back to /computers, an alert message lets them know the computer has been added.

    Scenario: Newly created computer was created and stored in the database.
    Given the user has just created a new computer.
    And User filters the computer by name.
    Then User is able to find the computer that they just added.

    Scenario: Form validation
    Given User is at /computers/new
    And User Types Introduced and Discontinued dates in the wrong format.
    And the user clicks "Create this computer"
    Then User gets error messages for required Computer name.
    Then User gets error format for dates in Introduced and Discontinued fields.
    Then User is unable to add a computer

    Scenario: User is able to make use of all fields while adding a new computer.
    Given the user is at /computers/new
    And User types a Computer Name
    And User types a introduced date in the correct format.
    And User types a Discontinued date in the correct format.
    And User chooses a Company in the dropdown menu.
    And User clicks "Create this computer"
    Then the computer is succesfully added.

    Scenario: User ceases their intention of adding a new computer.
    Given the user is at /computers/new
    And User clicks Cancel
    Then User is redirected back to /computers
