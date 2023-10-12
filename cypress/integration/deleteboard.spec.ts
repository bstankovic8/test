import Auth from "cypress/support/classes/auth";
import Brisi from "cypress/support/classes/brisi";
import Out from "cypress/support/classes/out";


const auth = new Auth();
const brisi = new Brisi();
const out = new Out();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        auth.login('opaaa@gmail.com','takoe');
    });

    afterEach(() => {
        out.logout();
    })

    it('should delete board', () => {
        brisi.delete();
    })
   
    });



