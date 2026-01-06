class checkoutPage {
    elements = {
        step1Pagetitle: () => cy.get('[data-test="title"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        secondName: () => cy.get('[data-test="lastName"]'),
        zipcode: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        step2Pagetitle: () => cy.get('[data-test="title"]'),
        finishBtn: () => cy.get('[data-test="finish"]'),
        orderCompleteMsg: () => cy.get('[data-test="complete-header"]')
    }

    getstep1Pagetitle() {
        return this.elements.step1Pagetitle();
    }

    getfirstName() {
        return this.elements.firstName();
    }

    getsecondName() {
        return this.elements.secondName();
    }

    getzipcode() {
        return this.elements.zipcode();
    }

    clickContinueBtn() {
        return this.elements.continueBtn().click();
    }
    
    getstep2Pagetitle() {
        return this.elements.step2Pagetitle();
    }

    clickFinishBtn() {
        this.elements.finishBtn().click();
    }

    getorderCompleteMsg() {
        return this.elements.orderCompleteMsg();
    }
}
export default new checkoutPage()