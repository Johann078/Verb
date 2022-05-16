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
        cy.get('nav span').contains('Contacts').click()
        cy.get('.sub-nav').contains('Add Contact').click()
        cy.get('#profile').then(label => {
            cy.wrap(label).find('#ContactFirstName').type('tetsauto') 
            cy.wrap(label).find('#saveSubmitRed').click()
           
        })
        cy.get('.contactlist').then(contactList => {
            cy.wrap(contactList).find('.nameLink').contains('tetsauto').click()
        })

        cy.get('.contacts_view').then(contacts_view => {
            
            cy.wrap(contacts_view).find('.delete-contact-link').contains('Delete').scrollIntoView().click()
        })
        cy.get(':nth-child(2) > .overlay-content > .dynRemoveOut > .floaterPointer > .fl-right > #ContactViewForm > .btnRed').click()
    })
})
