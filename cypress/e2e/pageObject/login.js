class login {
    verifyUrl() {
    return cy.url().should('include', '/customer/account/login')
    }
    email(){
        return cy.get('input[id="email"]')
    }
    password(){
        return cy.get('input[name="login[password]"]')
    }
    signInButton(){
        return cy.get('button[type="submit"]').contains('Sign In')
    }
}
export default login