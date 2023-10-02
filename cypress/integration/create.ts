describe('create', () => {
    it('home page', () => {
        cy.visit('http://localhost:3000/');
    })

    it('account', () => {
        cy.get('[data-cy="login-menu"]').click();
        cy.contains('Sign up here').click();
        //ovo treba da se napise lepse, citljiviji kod, ali ja sam za sada ovako
        cy.get('[data-cy="signup-email"]').click().type('nja@gmail.com');
        cy.get('[data-cy="signup-password"]').click().type('takoe');
        cy.get('[data-cy="signup"]').click();  
        //nema asertacije
    })
})