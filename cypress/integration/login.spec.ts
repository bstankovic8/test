import Auth from "cypress/support/classes/auth";

const auth = new Auth();

describe('create', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/');
  })

  it('login', () => {
    auth.login('opaaa@gmail.com','takoe');
  
    auth.assertMessage('User is logged in')
  })
})