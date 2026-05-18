describe('Custom Command Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login using custom command', () => {

    cy.login()

    cy.url()
      .should('include', '/inventory.html')
  })

})
