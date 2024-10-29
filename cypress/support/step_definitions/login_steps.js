/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import login_page from "../pages/login_page"

Given('I am on login screen', () => {
    home_page.minhaKawasaki()
})

Given('I fill in the field login email {string}', (email) => {
    login_page.fillEmail(email)
})

Given('I fill in the field login password {string}', (password) => {
    login_page.fillPassword(password)
})

When('I click button Login', () => {
    login_page.clickButtonLogin()
})

Then('I see message {string}', (message) => {
    login_page.checkUser(message)
})

Then('I see message {string} on login', (message) => {
    login_page.checkEmailError(message)
})

Then('I see message {string} Invalid email login', (message) => {
    login_page.checkInvalidEmail(message)
})

Then("I see message {string} empity password login", (message) => {
    login_page.checkPasswordError(message)
})

Then('I see multiple erro message', () => {
    login_page.checkInvalidPasswordorEmail()
})