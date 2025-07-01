/// <referance type="cypress" />

describe('Add Product To Compare Functionality', () => {
    it('validate that the user can add the product to compare from product page' , ()=>{
        cy.visit('/')
        cy.get('.product-item-photo').eq(4).click()
        cy.wait(3000)
        cy.get('.tocompare').click()
        cy.wait(3000)
        cy.get("[role=alert]").should('be.visible').and('contain', "You added product Fusion Backpack to the")
        cy.get("[role='alert'] a").should('be.visible').and('contain' , "comparison list")
        cy.get(".compare").first().should("be.visible").and("contain" , "Compare Products")
        cy.get(".compare").first().should("be.visible").and("contain" , "1 item")
        cy.url().should('eq' , "https://magento.softwaretestingboard.com/fusion-backpack.html")

    })
});