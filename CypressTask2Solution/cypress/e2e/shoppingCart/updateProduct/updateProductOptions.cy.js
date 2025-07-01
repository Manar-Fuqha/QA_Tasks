/// <referance type="cypress" />

describe('Update Product Functionality', () => {
    beforeEach('add product to cart' , ()=>{
        cy.addShirtToCart()
    })
    it('validate that the user can update products options from the shopping cart page', ()=>{
        cy.wait(3000)
        cy.get('.showcart').click()
        cy.get('.viewcart').click()
        cy.get('.action-edit').click()
        cy.url().should('contain','https://magento.softwaretestingboard.com/checkout/cart/configure/id/')
        cy.get('.swatch-option').contains('XS').click()
        cy.get("[aria-label=Green]").click()
        cy.get('#product-updatecart-button').click()
        cy.url().should('eq','https://magento.softwaretestingboard.com/checkout/cart/')
        cy.get("[role='alert']").should("be.visible").and('contain','Balboa Persistence Tee was updated in your shopping cart.')
        cy.get('.item-options dd').eq(0).should('contain','XS')
        cy.get('.item-options dd').eq(1).should('contain','Green')


    });

});