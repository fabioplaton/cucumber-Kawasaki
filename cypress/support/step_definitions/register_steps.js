/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import Register_Page from "../pages/Register_Page"

Given('I am on register screen', () => {
    home_page.minhaKawasaki()
})

When('I clink BtnRegister', () => {
    Register_Page.clickRegister()
})

Then('I see message email {string}', (message) => {
    Register_Page.successRegister(message)
})

Then('I see message {string} on register', (message) => {
    Register_Page.checkEmailError(message)
})

Given('I fill in the field email {string}', (email) => {
    Register_Page.fillEmail(email)
})

Given('I fill in the field password {string}', (password) => {
    Register_Page.fillPassword(password)
})

Given('I fill in the field confirm the password {string}', (password) => {
    Register_Page.fillConfirmPassword(password)
})

Given('I click on the agree terms and conditions', () => {
    Register_Page.clickAgreeTermsAndConditions()
})

Then('I see message {string} on invalid email', (message) => {
    Register_Page.checkInvalidEmail(message)
})

Then('I see message {string} on empity password', (message) => {
    Register_Page.checkPasswordError(message)
})

Then('I see message {string} on invalid password', (message) => {
    Register_Page.checkPasswordError(message)
})

Then('I see message {string} on empity password confirmation', (message) => {
    Register_Page.checkConfirmPassword(message)
})

Then('I see message {string} on check privacy policy', (message) => {
    Register_Page.CheckAge(message)
})