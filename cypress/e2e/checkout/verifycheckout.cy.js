import productPage from "../../support/pages/productPage";
import loginPage from "../../support/pages/loginPage";
import checkoutPage from "../../support/pages/checkoutPage";

describe('Checkout Flow', () => {
    it('Verify user can checkout items', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.loginWithStandradUser(); 
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
        cy.enterCustomerData();
        checkoutPage.clickContinueBtn();
        // Assert checkout overview page
        checkoutPage.getstep1Pagetitle().should('have.text', 'Checkout: Overview');
        checkoutPage.clickFinishBtn();
        // Assert order complition
        checkoutPage.getorderCompleteMsg().should('have.text', 'Thank you for your order!');
    })
})