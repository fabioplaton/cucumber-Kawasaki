Feature: Login User

    Background: Access register screen
        Given I am on login screen
    
    Scenario: Login Successfully
        And I fill in the field login email "Virginie33@yahoo.com"
        And I fill in the field login password "Y0zhgutWI0tk5bK"
        When I click button Login
        Then I see message "Virginie33@yahoo.com"

    Scenario: Empity email field
        When I click button Login
        Then I see message 'Um endereço de e-mail válido é necessário.' on login

    Scenario: Invalid email field
        And I fill in the field login email "Virginie33"
        And I fill in the field login password "Y0zhgutWI0tk5bK"
        When I click button Login
        Then I see message 'Endereço de email inválido, tente novamente.' Invalid email login

    Scenario: Empity password field
        And I fill in the field login email "Virginie33@yahoo.com"
        When I click button Login
        Then I see message 'O campo "Senha" é obrigatório.' empity password login

    Scenario: Invalid password field
        And I fill in the field login email "Virginie33@yahoo.com"
        And I fill in the field login password "12345"
        When I click button Login
        Then I see multiple erro message