import loginPage from "../../support/pages/loginPage"
describe('User Authentication', () => {
    it('Verify user can login', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('loginData').then((loginData) => {
            loginPage.login(loginData.usrname, loginData.password)
        })
        cy.url().should('include', 'inventory.html');    
    })

})