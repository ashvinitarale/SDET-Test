import productPage from "../../support/pages/productPage";
import loginPage from "../../support/pages/loginPage";
import checkoutPage from "../../support/pages/checkoutPage";

describe('Checkout Flow', () => {
    it('Verify user can checkout items', () => {
        cy.visit('https://www.saucedemo.com/');
        // Logint with standard user credentials
        cy.fixture('loginData').then((loginData) => {
            loginPage.login(loginData.usrname, loginData.password)
        })
        // Add items to cart
        productPage.clickOnaddToCartBackpackBtn();
        productPage.clickOnaddToCartBikeLigtBtn();
        productPage.clickOnaddToCartBoltTshirtBtn();
        // Assert wherether items addded to cart
        productPage.getremoveBackpackBtn().should('be.visible');
        productPage.getremoveBikeLightBtn().should('be.visible');
        productPage.getremoveBoltTshirtBtn().should('be.visible');
        productPage.getnoOfCartItems().should('have.text', '3')
        productPage.clickShopingChartLink();
        // Assert cart page 
        cy.url().should('include', 'cart.html');
        productPage.clickOncheckOutBtn();
        // Assert checkout page
        checkoutPage.getstep1Pagetitle().should('have.text', 'Checkout: Your Information');
        // Enter user details
        cy.fixture('customerData').then((customerData) => {
            checkoutPage.getfirstName().type(customerData.firstName);
            checkoutPage.getsecondName().type(customerData.lastName);
            checkoutPage.getzipcode().type(customerData.zipcode);
        })
        checkoutPage.clickContinueBtn();
        // Assert checkout overview page
        checkoutPage.getstep1Pagetitle().should('have.text', 'Checkout: Overview');
        checkoutPage.clickFinishBtn();
        // Assert order complition
        checkoutPage.getorderCompleteMsg().should('have.text', 'Thank you for your order!');
    })
})