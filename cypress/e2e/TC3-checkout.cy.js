import Login from './pageObject/login'
import HomePage from './pageObject/homePage'
import LoggedHomePage from './pageObject/loggedHomePage'
import WhatIsNewPage from './pageObject/whatIsNewPage'
import ProductPage from './pageObject/productPage'
import CheckoutPage from './pageObject/checkoutPage'

describe('User checkout', () => {

  const login = new Login()
  const homePage = new HomePage()
  const loggedHomePage = new LoggedHomePage()
  const whatIsNewPage = new WhatIsNewPage()
  const productPage = new ProductPage()
  const checkoutPage = new CheckoutPage()

  // Load user data
  beforeEach(() => {
    cy.fixture('user').as('userData')
  })


  it('should login, add to cart and checkout', function () {
    
    //Login successfully
    cy.visitHomePage()
    homePage.signInButton().click()
    login.verifyUrl()
    login.email().type(this.userData.validUserEmail)
    login.password().type(this.userData.validUserPass)
    login.signInButton().click()
    loggedHomePage.verifyWelcomeMessage()

    //Add product to cart
    loggedHomePage.whatIsNewButton().click()
    whatIsNewPage.firstProduct().click()
    productPage.sizeOption().click()
    productPage.colorOption().click()
    productPage.addToCartButton().click()
    productPage.successMessage()

    //Checkout
    productPage.cartIcon().click()
    productPage.checkoutButton().click()

    cy.get('#checkout-shipping-method-load', { timeout: 15000 }).should('be.visible').within(() => {
    checkoutPage.fixedShipping().click()
    })
    
    checkoutPage.nextButton().click()
    checkoutPage.placeOrderButton().click()
    checkoutPage.verifySuccessMessage()

  })
})