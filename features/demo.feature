Feature: I am going to validate calculator App

    @calculatortesting
    Scenario: Calculator Add Functionality Testing

        Given I will navigate to "Calc" page
        When I add two numbers "3" and "5"
        Then The output displayed should be "8"

    @calculatortesting
    Scenario: Calculator Add Functionality Testing

        Given I will navigate to "Calc" page
        When I add two numbers "2" and "7"
        Then The output displayed should be "7"

    # @Angulartesting
    # Scenario: Enter the Hello in ANgular Website

    #     Given I will navigate to "AngularJS" page
    #     When I clicked on Header link
    #     And You will navigate to angular page
    #     Then You will enter "Hello" in search box

    # @Angulartesting
    # Scenario Outline: Enter the Hello in ANgular Website

    #     Given I will navigate to "AngularJS" page
    #     When I clicked on Header link
    #     And You will navigate to angular page
    #     Then You will enter "<Key>" in search box
    #     Examples:
    #         | Key   |
    #         | Hello |
    #         | Hai   |
