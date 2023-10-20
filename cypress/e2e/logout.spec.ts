import { should } from "chai";
import Auth from "cypress/support/classes/auth";
import Out from "cypress/support/classes/logout";

const out = new Out();
const auth = new Auth();

describe('logout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        auth.login('opaaa@gmail.com','takoe');
        cy.get('[data-cy=logged-user]').should('be.visible');
    })
  
    it ('should logout', () => {
        out.logout();
    })

})