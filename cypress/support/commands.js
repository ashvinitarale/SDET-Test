// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loginPage from "../../support/pages/loginPage";
import checkoutPage from "../../support/pages/checkoutPage";
Cypress.Commands.add('loginWithStandradUser', () => {
    // Login with standard user credentials
    cy.fixture('loginData').then((loginData) => {
        loginPage.login(loginData.usrname, loginData.password)
    })
})

Cypress.Commands.add('enterCustomerData', () => {
    // Enter user details
    cy.fixture('customerData').then((customerData) => {
        checkoutPage.getfirstName().type(customerData.firstName);
        checkoutPage.getsecondName().type(customerData.lastName);
        checkoutPage.getzipcode().type(customerData.zipcode);
    })

})