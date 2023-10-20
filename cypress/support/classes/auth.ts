import loginElements from "../elements/loginElements";

export default class Auth {
    /**
     * Logs the user in via UI
     * @param {string} username - Username 
     * @param {string} password - Paswword
     * @returns {void} void 
     */
    login(
        username: string,
        password: string
    ): void {


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
     * Asserts the notification message
     * @param {string} message - Message to assert 
     */
    assertMessage(message: string) {
        cy.contains(message).should('be.visible');
    }
}

//Ovo treba 