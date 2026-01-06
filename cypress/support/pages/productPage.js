class productPage {
    elements = {
        addToCartBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addToCartBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        removeBikeLightBtn: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        aadToCartBoltTshirt: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        removeBoltTshirtBtn: () => cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'),
        shopingChartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        checkOutBtn: () => cy.get('[data-test="checkout"]'),
        noOfCartItems: () => cy.get('[data-test="shopping-cart-badge"]')
    }

    clickOnaddToCartBackpackBtn() {
        this.elements.addToCartBackpack().click();
    }

    clickOnaddToCartBikeLigtBtn() {
        this.elements.addToCartBikeLight().click();
    }

    clickOnaddToCartBoltTshirtBtn() {
        this.elements.aadToCartBoltTshirt().click();
    }

    clickShopingChartLink() {
        this.elements.shopingChartLink().click();
    }

    clickOncheckOutBtn() {
        this.elements.checkOutBtn().click();
    }

    getremoveBackpackBtn() {
        return this.elements.removeBackpackBtn();
    }

    getremoveBikeLightBtn() {
        return this.elements.removeBikeLightBtn();
    }

    getremoveBoltTshirtBtn() {
        return this.elements.removeBoltTshirtBtn();
    }

    getnoOfCartItems() {
        return this.elements.noOfCartItems();
    }
}

export default new productPage();