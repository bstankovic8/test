import loginElements from "cypress/support/commands/loginElements";


describe('create', () => {
  it('home page', () => {
      cy.visit('http://localhost:3000/');
  })

  it('login', () => {
    cy.get(loginElements.loginMenu).click();
    cy.get(loginElements.loginEmail).click().type('opaaa@gmail.com');
    cy.get(loginElements.loginPassword).click().type('takoe');
    cy.get(loginElements.loginButton).click();
    cy.contains('User is logged in').should('be.visible');
    //ovo bi trebalo da se vidi pull noibranch
  })
})