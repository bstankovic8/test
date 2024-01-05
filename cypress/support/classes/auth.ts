import { param } from "cypress/types/jquery";
import loginElements from "../elements/loginElements";
import { get } from "cypress/types/lodash";

export default class auth {
/** 
    @param {string} username
    @param {string} password
    @return {void} 
*/
login(
    username: string,
    password: string
): void {

    cy

        .get(loginElements.loginMenu)
        .click();

    cy

        .get(loginElements.loginmodul)
        .should('be.visible')
        .get(loginElements.loginClose)
        .click();

    cy

        .get(loginElements.loginMenu)
        .click();


    cy

        .get(loginElements.loginEmail)
        .click()
        .type(username);

    cy

        .get(loginElements.loginPassword)
        .click()
        .type(password);

    cy

        .get(loginElements.loginButton)
        .click();

}  

/**
 * @param {string} message
 * @param {string} username //da asertuje tako sto ce da procita da je taj user ulogovan
 */
assertMessage(message: string) {
    cy.contains(message).should('be.visible');
}



}