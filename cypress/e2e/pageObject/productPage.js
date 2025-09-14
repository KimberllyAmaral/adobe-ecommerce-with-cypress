class productPage {
    sizeOption(){
        return cy.get('#option-label-size-144-item-171')
    }
    colorOption(){
        return cy.get('#option-label-color-93-item-49')
    }
    addToCartButton(){
        return cy.get('#product-addtocart-button')
    }
    successMessage(){
        return cy.get('[data-ui-id="message-success"]')
    .should('contain.text', 'You added Echo Fit Compression Short to your shopping cart.')
    }
    cartIcon(){
        return cy.contains('a', 'My Cart')
    }
    checkoutButton(){
        return cy.get('button[id="top-cart-btn-checkout"]')
    }
      
    
}
export default productPage