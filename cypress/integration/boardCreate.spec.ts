import Auth from "cypress/support/classes/auth";
import BoardCreate from "cypress/support/classes/boardCreate";
import Out from "cypress/support/classes/out";

const auth = new Auth();
const boardCreate = new BoardCreate();
const out = new Out();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        auth.login('opaaa@gmail.com','takoe');
        cy.wait(10000);//popravi, ne ovako
    })

    afterEach(() => {
        out.logout();
    })

    it( 'board', () => {
        boardCreate.board();
    })
    
})