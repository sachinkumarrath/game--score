describe('First E2E', () => {
  it('Just run this', () => {
    expect(true).to.eq(true)
  })
  it('Just run this for fail', () => {
    cy.visit('http://localhost:7500/')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})