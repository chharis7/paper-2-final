describe('Form Test', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

    cy.wait(500)

    cy.login()
  })

  it('Add product to cart', () => {

    cy.get('.inventory_item button')
      .first()
      .click()

    cy.get('.shopping_cart_badge')
      .should('have.text', '1')
  })

})
