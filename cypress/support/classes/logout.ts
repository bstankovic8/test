import logoutElements from "../elements/logoutElements";

export default class out {

    logout(

    ):void {

    cy

        .get(logoutElements.logoutMenu)
        .click();

    cy

        .get(logoutElements.logoutButton)
        .click();
    }

    /**
     * @param {string} message
     */

    assertMessage(message: string) {
        cy.contains(message).should('be.visible');
    }
}