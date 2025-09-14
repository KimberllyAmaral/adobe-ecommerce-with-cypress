import Login from './pageObject/login'
import HomePage from './pageObject/homePage'
import LoggedHomePage from './pageObject/loggedHomePage'

describe('User Login', () => {
  
  const login = new Login()
  const homePage = new HomePage()
  const loggedHomePage = new LoggedHomePage()

  // Load user data
  beforeEach(() => {
    cy.fixture('user').as('userData')
  })

  it('should login successfully with valid data', function () {
    
    cy.visitHomePage()
    homePage.signInButton().click()
    login.verifyUrl()
    login.email().type(this.userData.validUserEmail)
    login.password().type(this.userData.validUserPass)
    login.signInButton().click()
    loggedHomePage.verifyWelcomeMessage()

  })
})