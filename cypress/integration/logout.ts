import loginElements from "cypress/support/elements/loginElements";
import logoutElements from "cypress/support/elements/logoutElements";

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

    it('logout', () => {
      cy.get(logoutElements.logoutMenu).click();
      cy.get(logoutElements.logoutB).click({force: true});
      cy.contains('Log in').should('be.visible');
    })
  })