import loginElements from "cypress/support/elements/loginElements";
import boardElements from "cypress/support/elements/boardElements";

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
    })

    it('board', () => {
        cy.get(boardElements.createBoard).click();
        cy.get(boardElements.newBoard).click().type('testabilna aplikacija');
        cy.get(boardElements.createNew).click();
        //nema asertaciju
    })
})