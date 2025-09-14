class homePage {
    signInButton(){
        return cy.contains('a', 'Sign In')
    }
    createAccountButton(){
        return cy.contains('a', 'Create an Account')
    }
}
export default homePage