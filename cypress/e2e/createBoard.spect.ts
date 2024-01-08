import Auth from "cypress/support/classes/auth";
import MakeBoard from "cypress/support/classes/makeBoard";
import Out from "cypress/support/classes/logout";

const auth = new Auth();
const makeBoard = new MakeBoard();
const out =  new Out();

describe('I will make board', () => {
    beforeEach(() => {
        cy.visit('/');
        auth.login('opaaa@gmail.com','takoe')
    })

    it('make new', () => {
        makeBoard.board();
        makeBoard.assertMessage('test board');
        out.logout();
        out.assertMessage('Log in');

    })
})