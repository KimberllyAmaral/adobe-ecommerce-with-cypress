import HomePage from './pageObject/homePage'
import RegistrationPage from './pageObject/registrationPage'
import CustomerAccount from './pageObject/customerAccount'

describe('User Registration', () => {
   
  const homePage = new HomePage()
  const registrationPage = new RegistrationPage()
  const customerAccount = new CustomerAccount()

  it('should register successfully with valid data', () => {
    
    cy.visitHomePage()
    homePage.createAccountButton().click()
    registrationPage.verifyUrl()
    registrationPage.firstName().type("Kimberlly")
    registrationPage.lastName().type("Amaral")
    registrationPage.email().type("kimberllys.amaral7@gmail.com")
    registrationPage.password().type("Amaral123")
    registrationPage.confirmPassword().type("Amaral123")
    registrationPage.createAccountButton().click()
    customerAccount.verifyThankYouMessage()
   
  })
})