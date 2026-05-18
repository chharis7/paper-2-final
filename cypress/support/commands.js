Cypress.Commands.add('login', () => {

  cy.get('[data-test="username"]', { timeout: 10000 })
    .should('be.visible')
    .type('standard_user')

  cy.get('[data-test="password"]')
    .should('be.visible')
    .type('secret_sauce')

  cy.get('[data-test="login-button"]')
    .should('be.visible')
    .click()

  // Wait for redirect to inventory page
  cy.url({ timeout: 10000 }).should('include', '/inventory.html')
})