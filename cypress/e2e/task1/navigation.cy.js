describe('Navigation Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')
    
    cy.wait(500)

    cy.login()
  })

  // Navigation Test 1
  it('Open menu and verify page', () => {

    cy.get('#react-burger-menu-btn')
      .click()

    cy.get('#logout_sidebar_link')
      .should('be.visible')
  })

  // Navigation Test 2
  it('Visit two pages sequentially', () => {

    cy.get('.inventory_item_name')
      .first()
      .click()

    cy.get('.inventory_details_name')
      .should('be.visible')

    cy.go('back')

    cy.get('.title')
      .should('have.text', 'Products')
  })

})
