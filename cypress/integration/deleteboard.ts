import loginElements from "cypress/support/elements/loginElements";
import boardElements from "cypress/support/elements/boardElements";
import deleteBoardElements from "cypress/support/elements/deleteBoardElements";

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should login', () => {
        cy.get(loginElements.loginMenu).click();
        cy.get(loginElements.loginEmail).click().type('opaaa@gmail.com');
        cy.get(loginElements.loginPassword).click().type('takoe');
        cy.get(loginElements.loginButton).click();
        cy.contains('User is logged in').should('be.visible');
    });

    it('should create a board', () => {
        cy.get(boardElements.createBoard).click();
        cy.get(boardElements.newBoard).click().type('testabilna aplikacija');
        cy.get(boardElements.createNew).click();
        
    });

    it('should delete a board', () => {
        cy.get(deleteBoardElements.board).click();
        cy.get(deleteBoardElements.boardOption).click();
        cy.get(deleteBoardElements.deleteBoard).click();
        cy.contains('Create a board...').should('be.visible');
    });
});
