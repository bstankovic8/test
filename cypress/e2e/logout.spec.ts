import Auth from "cypress/support/classes/auth";
import Out from "cypress/support/classes/logout";

const auth = new Auth();
const out = new Out();

describe('I will logout', () => {
    beforeEach(() => {
        cy.visit('/');
        auth.login('opaaa@gmail.com','takoe');
        cy.intercept('GET', '/api/users').as('alias');
    })

    it('logout', () => {
        cy.wait('@alias');
        out.logout();
        out.assertMessage('Log in');
    })
})
