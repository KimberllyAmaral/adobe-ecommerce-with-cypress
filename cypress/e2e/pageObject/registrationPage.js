class registrationPage {
    verifyUrl() {
    return cy.location("pathname").should("equal", "/customer/account/create/")
    }
    firstName(){
        return cy.get('input[name="firstname"]')
    }
    lastName(){
        return cy.get('input[name="lastname"]')
    }
    email(){
       return cy.get('input[id="email_address"]')
    }
    password(){
        return cy.get('input[id="password"]')
    }
    confirmPassword(){
        return cy.get('input[name="password_confirmation"]')
    }
    createAccountButton(){
        return cy.get('button[type="submit"]').contains('Create an Account')
    }
}
export default registrationPage