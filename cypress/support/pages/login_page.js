const elements = {
    button: {
        login: '[type="submit"]',
    },
    field: {
        email: '#Email',
        password: '#Password',
    },
    message: {
        checkUser: '#dropdownMenuLink',
        emailError: '#Email-error',
        checkInvalidEmail: '.field-validation-error',
        passwordError: '#Password-error',
        invalidPasswordorEmail: '#validationSummary li',
        SoryInvalidFields: '#validationSummary span'
    }
}


export default{
    fillEmail(email){
        cy.get(elements.field.email).type(email)
    },

    fillPassword(password){
        cy.get(elements.field.password).type(password)
    },

    clickButtonLogin(){
        cy.get(elements.button.login).contains("LOGIN").click()
    },

    checkUser(message){
        cy.get(elements.message.checkUser).should('be.visible').should('contains.text', message)
    },

    checkEmailError(message){
        cy.get(elements.message.emailError).should('be.visible').should('have.text', message)
    },

    checkInvalidEmail(message) { 
        cy.get(elements.message.checkInvalidEmail).should('be.visible').should('have.text', message)
    },

    checkPasswordError(message) {
        cy.get(elements.message.passwordError).should('be.visible').should('contains.text', message)
    },

    checkInvalidPasswordorEmail() {
        cy.get(elements.message.SoryInvalidFields).should('be.visible').should('have.text', 'Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.')
        cy.get(elements.message.invalidPasswordorEmail).should('be.visible').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')
    }
}