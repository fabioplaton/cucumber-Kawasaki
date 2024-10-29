/// <reference types="cypress" />

const elements = {
    buttons:{
        minhaKawasaki: '.d-none',
    },
}

export default{

    minhaKawasaki() {
        cy.visit('/')
        cy.get(elements.buttons.minhaKawasaki).contains('MINHA KAWASAKI').click()        
    },
}