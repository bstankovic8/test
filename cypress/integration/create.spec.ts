import Create from "cypress/support/classes/create";

const create = new Create();

describe('create', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {
            create.create('Bovinalog@gmail.com', 'takoe')
        //nema asertacije
    })
})
