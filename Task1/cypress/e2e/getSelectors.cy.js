/// </ referance type='cypress' />

describe('Get Elements Selector', () => {
    it('Verify selectors',()=>{
        cy.visit("/#/register")
        cy.get('.navbar-brand')
        cy.get('.nav-link').first()
        cy.get('.active')
        cy.get('.row h1')
        cy.get('.row a').first()
        cy.get('[placeholder="Username"]')
        cy.get('[type="email"]')
        cy.get('[type="password"]')
        cy.get('.btn')
        cy.get('.logo-font')
        cy.get('.attribution')
    });
});