describe('User Registration', () => {
  it('should register successfully with valid data', () => {
    cy.visit('https://magento.nublue.co.uk/')

    cy.contains('a', 'Create an Account').click()
    cy.location("pathname").should("equal", "/customer/account/create/")

    cy.get('input[name="firstname"]').type("Kimberlly")
    cy.get('input[name="lastname"]').type("Amaral1")

    cy.get('input[id="email_address"]').type("kimberllys.amaral1@gmail.com")
    cy.get('input[id="password"]').type("Amaral123")

    cy.get('input[name="password_confirmation"]').type("Amaral123")
    cy.get('button[type="submit"]').contains('Create an Account').click()

    cy.get('[data-ui-id="message-success"]')
  .should('contain.text', 'Thank you for registering with Main Website Store.');


  })
})