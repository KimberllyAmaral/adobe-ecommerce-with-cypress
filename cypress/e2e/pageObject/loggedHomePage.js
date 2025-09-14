class loggedHomePage {
    verifyWelcomeMessage(){
        return cy.contains('.logged-in', 'Welcome,', { timeout: 10000 }).should('be.visible')

    }
    whatIsNewButton(){
        return cy.contains('a', "What's New")
    }
    
    
}
export default loggedHomePage