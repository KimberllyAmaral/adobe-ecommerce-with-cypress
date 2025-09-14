describe('User Login', () => {
  it('should login successfully with valid data', () => {
    cy.visit('https://magento.nublue.co.uk/')

    cy.contains('a', 'Sign In').click()
    cy.url().should('include', '/customer/account/login')

    cy.get('input[id="email"]').type("roni_cost@example.com")
    cy.get('input[name="login[password]"]').type("roni_cost3@example.com")

    cy.get('button[type="submit"]').contains('Sign In').click()

    cy.get('.logged-in').should('contain.text', 'Welcome,')

  })
})