import Auth from "cypress/support/classes/auth";
import Tabla from "cypress/support/classes/tabla";
import Out from "cypress/support/classes/out";

const auth = new Auth();
const tabla = new Tabla();
const out = new Out();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        auth.login('opaaa@gmail.com','takoe');
        cy.wait(10000);
    })

    afterEach(() => {
        out.logout();
    })

    it( 'board', () => {
        tabla.board();
    })
    
})