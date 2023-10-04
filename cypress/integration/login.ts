describe('create', () => {
  it('home page', () => {
      cy.visit('http://localhost:3000/');
  })

  it('login', () => {
    cy.get('[data-cy="login-menu"]').click();
    cy.get('[data-cy="login-email"]').click().type('opaaa@gmail.com');
    cy.get('[data-cy="login-password"]').click().type('takoe');
    cy.get('[data-cy="login"]').click();
    cy.contains('User is logged in').should('be.visible');
    //ovo bi trebalo da se vidi
  })
})