class customerAccount {
    verifyThankYouMessage(){
        return cy.get('[data-ui-id="message-success"]').should('contain.text', 'Thank you for registering with Main Website Store.')
    }
    
}
export default customerAccount