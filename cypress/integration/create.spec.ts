import CreateAccount from "cypress/support/classes/createAccount";



const createAccount = new CreateAccount();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {

            createAccount.create('Govinalog@gmail.com', 'takoe')
        //nema asertacije
    })
})
