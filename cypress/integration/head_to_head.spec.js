describe('head to head page', () => {
  it('land at home page', () => {
    cy.visit('/')
    cy.get('li:nth-child(2)').click()
  })
})