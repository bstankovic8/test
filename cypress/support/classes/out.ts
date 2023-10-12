import logoutElements from "../elements/logoutElements";

export default class Out {

    logout(
      
    ): void {
      cy.get(logoutElements.logoutMenu).click();
      cy.get(logoutElements.logoutB).click({force: true});
      cy.contains('Log in').should('be.visible');
    }
}
