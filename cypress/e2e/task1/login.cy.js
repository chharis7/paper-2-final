describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // Login Test 1
  it('Login with valid credentials', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', '/inventory.html')

    cy.get('.title')
      .should('have.text', 'Products')
  })

  // Login Test 2
  it('Login with invalid password', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('wrongpassword')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
  })

  // Login Test 3
  it('Login with empty fields', () => {

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
  })

})
