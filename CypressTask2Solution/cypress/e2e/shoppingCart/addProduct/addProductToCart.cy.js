/// <referance type="cypress" />

describe('Check add product to cart functionality', () => {
    it('validate that the user can add product to shopping cart' , ()=>{
        
        cy.visit('/')
        cy.get('#search').type('shirt'+"{enter}")
        cy.url().should('eq','https://magento.softwaretestingboard.com/catalogsearch/result/?q=shirt')
        cy.get('.product-item-photo').eq(2).click()
        cy.wait(1000)
        cy.url().should('eq','https://magento.softwaretestingboard.com/balboa-persistence-tee.html')
        cy.get('.swatch-option').contains('M').click()
        cy.get("[aria-label=Orange]").click()
        cy.get("[title='Add to Cart']").click()
        cy.get('.counter-number').should('be.visible').and('have.text','1')
        cy.get("[role='alert']").should("be.visible").and('contain',"You added Balboa Persistence Tee to your")
        cy.get("[role='alert'] a").should("be.visible").and('contain',"shopping cart")


    });
});