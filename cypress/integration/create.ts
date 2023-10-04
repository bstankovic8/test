describe('create', () => {
    it('home page', () => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {
        cy.getByData("login-menu").click();
        cy.contains('Sign up here').click();
        //ovo treba da se napise lepse, citljiviji kod, ali ja sam za sada ovako
        cy.getByData("signup-email").click().type('nja@gmail.com');
        cy.getByData("signup-password").click().type('takoe');
        cy.getByData("signup").click();  
        //nema asertacije
    })
})