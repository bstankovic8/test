import createElements from "cypress/support/elements/createElements";


describe('create', () => {
    it('home page', () => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {
        cy.get(createElements.loginMenu).click();
        cy.get(createElements.signUpHere).click();
        //ovo treba da se napise lepse, citljiviji kod, ali ja sam za sada ovako
        //mail se menja rucno, na putu sam da koristim fejkere(trebalo bi da su fejkeri :D)
        cy.get(createElements.signUpEmail).click().type('novinalog@gmail.com');
        cy.get(createElements.signUpPassword).click().type('takoe');
        cy.get(createElements.signUp).click();  
        //nema asertacije
    })
})