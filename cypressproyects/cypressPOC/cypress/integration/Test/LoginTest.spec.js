/// <reference types="cypress" />



describe('Our first test', () => {
    it('Login test', () => {
        cy.visit('/')
        cy.get('#login_panel').then(label => {
            const emailLabel = label.find('[for="UserUsername"]').text()
            expect(emailLabel).to.equal('Username')

            const passwordLabel = label.find('[for="UserPassword"]').text()
            expect(passwordLabel).to.equal('Password')
            cy.wrap(label).find('#UserUsername').type('erling')
            cy.wrap(label).find('#UserPassword').type('password')
            cy.wrap(label).get('[class="btn btn-primary"][type="submit"]').should('contain', 'Log In')
            cy.wrap(label).find('[type="submit"]').click()


        })
        cy.get('.leftCol').then(h1 => {
            cy.url().should('include', 'erling/admin/prospecting')
            cy.wrap(h1).get('#page_title').should('contain', 'Media')

        })
    })
})
