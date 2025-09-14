class checkoutPage {
    fixedShipping(){
        return cy.contains('td.col-method', 'Fixed')
    }
    nextButton(){
        return cy.contains('button', 'Next')
    }
    placeOrderButton(){
        return cy.contains('button', 'Place Order')
    }
    verifySuccessMessage() {
        return cy.contains('span', 'Thank you for your purchase!')
   .should('be.visible')
    }
}
export default checkoutPage