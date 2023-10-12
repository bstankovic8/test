import Auth from "cypress/support/classes/auth";
import DeleteBoard from "cypress/support/classes/deleteBoard";
import Out from "cypress/support/classes/out";


const auth = new Auth();
const deleteBoard = new DeleteBoard();
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
        deleteBoard.delete();
    })
   
    });



