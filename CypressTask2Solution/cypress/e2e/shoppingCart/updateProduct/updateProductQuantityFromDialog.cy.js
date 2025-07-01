/// <referance type="cypress" />

describe('Update Product Functionality', () => {
    beforeEach('add product to cart' , ()=>{
        cy.addShirtToCart()
    })
    it('validate that the user can update products quantity from the shopping cart dialog' , ()=>{
        cy.wait(3000)
        cy.get('.showcart').click()
        cy.get("[type='number']").first().clear().type('3')
        cy.get('.update-cart-item').click()
        cy.get("[type='number']").first().should('have.value','3')
        cy.get('.counter-number').should('be.visible').and('have.text','3')
        cy.get('.items-total .count').should('have.text','3')
        cy.get(".cart-item-qty").should("have.value", "3")
        cy.get('.subtotal .price-container .price').should('have.text' , '$87.00')

    });
});