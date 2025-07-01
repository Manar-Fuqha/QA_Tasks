// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToMagento',(email , pass)=>{
        cy.visit('/')
        cy.get('.authorization-link').first().click()
        cy.get('#email').type(email)
        cy.get('#pass').type(pass)
        cy.get('#send2').click()
    });


Cypress.Commands.add('addShirtToCart' , ()=>{
        cy.visit('/')
        cy.get('#search').type('shirt'+"{enter}")
        cy.get('.product-item-photo').eq(2).click()
        cy.wait(1000)
        cy.get('.swatch-option').contains('M').click()
        cy.get("[aria-label=Orange]").click()
        cy.get("[title='Add to Cart']").click()
});