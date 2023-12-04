import Auth from "cypress/support/classes/auth";

const auth = new Auth();

describe('create', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/');
    auth.login('opaaa@gmail.com','takoe');
  })

  it('login', () => {
    auth.assertMessage('User is logged in')
  })
})
