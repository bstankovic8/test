import Auth from "cypress/support/classes/auth";
import DeleteTable from "cypress/support/classes/deletetable";
import Out from "cypress/support/classes/out";


const auth = new Auth();
const deleteTable = new DeleteTable();
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
        deleteTable.delete();
    })
   
    });



