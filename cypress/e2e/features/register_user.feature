Feature: Register User
    
    Background: Access register screen
        Given I am on register screen

    Scenario: Success Register
        And I fill in the field email 'Virginie33@yahoo.com'
        And I fill in the field password "Y0zhgutWI0tk5bK"
        And I fill in the field confirm the password "Y0zhgutWI0tk5bK"
        And I click on the agree terms and conditions
        When I clink BtnRegister
        Then I see message email 'Virginie33@yahoo.com'
    
    Scenario: Empity email field
        When I clink BtnRegister
        Then I see message 'Um endereço de e-mail válido é necessário.' on register

    Scenario: Invalid email field
        And I fill in the field email 'Virginie33'
        And I fill in the field password "Y0zhgutWI0tk5bK"
        And I fill in the field confirm the password "Y0zhgutWI0tk5bK"
        And I click on the agree terms and conditions
        When I clink BtnRegister
        Then I see message 'Endereço de email inválido, tente novamente.' on invalid email

    Scenario: Empity password field
        And I fill in the field email 'Virginie33@yahoo.com'
        When I clink BtnRegister
        Then I see message 'O campo "Senha" é obrigatório.' on empity password

    Scenario: Invalid password field
        And I fill in the field email 'Virginie33'
        And I fill in the field password "123456"
        When I clink BtnRegister
        Then I see message 'A senha deve ter pelo menos 8 caracteres' on invalid password

    Scenario: Empity password confirmation field
        And I fill in the field email 'Virginie33'
        And I fill in the field password "Y0zhgutWI0tk5bK"
        When I clink BtnRegister
        Then I see message 'A senha e a senha de confirmação não coincidem. Por favor, tente novamente.' on empity password confirmation

    Scenario: Not check the privacy policy
        And I fill in the field email 'Virginie33'
        And I fill in the field password "Y0zhgutWI0tk5bK"
        And I fill in the field confirm the password "Y0zhgutWI0tk5bK"
        When I clink BtnRegister
        Then I see message 'A verificação de idade é necessária.' on check privacy policy