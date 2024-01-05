import Auth from "cypress/support/classes/auth"

const auth = new Auth();
describe('i will login', () => {
    beforeEach(() => {
        cy.visit('/');
        auth.login('opaaa@gmail.com','takoe')
    })

    it('login', () => {
        auth.assertMessage('User is logged in')
    })

})