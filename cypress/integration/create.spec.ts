import CreateAccount from "cypress/support/classes/create";

const createAccount = new CreateAccount();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {
            createAccount.create('Bovinalog@gmail.com', 'takoe')
        //nema asertacije
    })
})
