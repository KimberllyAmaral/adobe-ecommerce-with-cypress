describe('User Login', () => {
  it('should login successfully with valid data', () => {
    cy.visit('https://magento.nublue.co.uk/')

    cy.contains('a', 'Sign In').click()
    cy.url().should('include', '/customer/account/login')

    cy.get('input[id="email"]').type("roni_cost@example.com")
    cy.get('input[name="login[password]"]').type("roni_cost3@example.com")

    cy.get('button[type="submit"]').contains('Sign In').click()

    cy.get('.logged-in').should('contain.text', 'Welcome,')

    // choose a prodruct
    cy.contains('a', "What's New").click()
    cy.get('.product-item').first().click()
    // add to cart
    // Seleciona primeiro tamanho e primeira cor
    cy.get('#option-label-size-144-item-171').click()
    // Seleciona tamanho


// Seleciona cor
cy.get('#option-label-color-93-item-49').click()

// Clica em Add to Cart
cy.get('#product-addtocart-button').click()


cy.get('[data-ui-id="message-success"]')
  .should('contain.text', 'You added Echo Fit Compression Short to your shopping cart.');

//abrir o carrinho
  cy.contains('a', 'My Cart').click()
  cy.get('button[id="top-cart-btn-checkout"]').click()

//Valida a pagina de cart
cy.get('#checkout-shipping-method-load', { timeout: 15000 }).should('be.visible').within(() => {
  // clicar no primeiro radio button ou na célula de texto
  cy.contains('td.col-method', 'Fixed').click()
})
// Pelo texto
cy.contains('button', 'Next').click()
cy.contains('button', 'Place Order').click()
cy.contains('span', 'Thank you for your purchase!')
  .should('be.visible')












    //cy.get('#product-addtocart-button').click()


  })
})