const elements = {
    buttons:{
        termsAndConditions: '#AgreeToTermsAndConditions',
        register: '[type="submit"]',
    },
    field: {
        email: '#RegistrationEmail',
        password: '#RegistrationPassword',
        confirmPasswor: '#ConfirmRegistrationPassword'
    },
    message: {
        checkRegister: '#dropdownMenuLink',
        emailError: '#RegistrationEmail-error',
        InvalidEmail: '.field-validation-error',
        passwordError: '#RegistrationPassword-error',
        confirmPasswordError: '#ConfirmRegistrationPassword-error',
        agreeTerms: '#AgreeToTermsAndConditions-error'
    }
}

export default{
    
    fillEmail(email){
        cy.get(elements.field.email).type(email)
    },

    fillPassword(password){
        cy.get(elements.field.password).type(password)
    },

    fillConfirmPassword(confirmPassword){
        cy.get(elements.field.confirmPasswor).type(confirmPassword)
    },

    clickAgreeTermsAndConditions(){
        cy.get(elements.buttons.termsAndConditions).check()
    },

    clickRegister(){
        cy.get(elements.buttons.register).contains('REGISTRAR-SE').click()
    },

    successRegister(email){
        cy.get(elements.message.checkRegister).should('contains.text', email)
    },

    checkEmailError(message){
        cy.get(elements.message.emailError).should('be.visible').should('have.text', message)
    },

    checkInvalidEmail(message){
        cy.get(elements.message.InvalidEmail).should('be.visible').should('have.text', message)
    },

    checkPasswordError(message){
        cy.get(elements.message.passwordError).should('be.visible').should('contains.text', message)
    },

    checkConfirmPassword(message){
        cy.get(elements.message.confirmPasswordError).should('be.visible').should('have.text', message)
    },

    CheckAge(message){
        cy.get(elements.message.agreeTerms).should('be.visible').should('have.text', message)
    }
    
}