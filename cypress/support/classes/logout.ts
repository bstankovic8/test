import logoutElements from "../elements/logoutElements";

export default class Out {

    logout(
      
    ): void {
        cy
        
            .get(logoutElements.logoutMenu)
            .click();

        cy
        
            .get(logoutElements.logoutButton)
            .click({force: true});

        cy
            
            .contains('Log in')
            .should('be.visible');
    }
}