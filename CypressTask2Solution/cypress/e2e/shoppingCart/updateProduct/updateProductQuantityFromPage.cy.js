/// <referance type="cypress" />

describe('Update Product Functionality', () => {
    beforeEach('add product to cart' , ()=>{
        cy.addShirtToCart()
    })
    it('validate that the user can update products quantity from the shopping cart page' , ()=>{
        cy.wait(3000)
        cy.get('.showcart').click()
        cy.get('.viewcart').click()
        cy.get("[title='Qty']").clear().type('3')
        cy.get('.update').click()
        cy.get("[title='Qty']").should('have.value' , '3')
        cy.get('.subtotal .cart-price').should('contain' , '$87.00')
        cy.get('.totals.sub').should('contain','$87.00')
        cy.get('.totals .amount .price').eq(2).should('contain','$87.00')
    });
});