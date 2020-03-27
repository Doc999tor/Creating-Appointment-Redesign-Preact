describe('Run module', function() {
  it('successfully loads, check routs', function() {
    cy.visit('/')
    cy.visit('/store')
    cy.get('.counter').click()
    cy.get('.store').click()
    cy.visit('/counter')
    cy.get('h1').should('contain', 'Counter')
  })
})