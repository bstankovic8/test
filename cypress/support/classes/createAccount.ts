import { param } from "cypress/types/jquery";
import createElements from "../elements/createElements";

export default class createAccount {

    create(
        username: string,
        password: string
    ): void {
        cy
        
            .get(createElements.loginMenu)
            .click();

        cy
            .get(createElements.signUpHere)
            .click();
    
        //mail se menja rucno, na putu sam da koristim fejkere(trebalo bi da su fejkeri :D)
        cy
        
            .get(createElements.signUpEmail)
            .click()
            .type(username);
        cy
        
            .get(createElements.signUpPassword)
            .click()
            .type(password);
        cy
        
            .get(createElements.signUp)
            .click();
    }

}