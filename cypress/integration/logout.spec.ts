import Auth from "cypress/support/classes/auth";
import Out from "cypress/support/classes/out";

const out = new Out();
const auth = new Auth();

describe('logout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        auth.login('opaaa@gmail.com','takoe');
        cy.wait(8000);
    })
  
    it ('should logout', () => {
        out.logout();
    })

})
  