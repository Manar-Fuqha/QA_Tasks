/// <referance type="cypress" />

describe('Delete From Cart Functionality', () => {
    beforeEach(()=>{
        cy.addShirtToCart()
    })
    it('validate that the user can delete product from shopping cart page', ()=>{
        cy.wait(3000)
        cy.get('.showcart').click()
        cy.get('.viewcart').click()
        cy.wait(3000)
        cy.get("[title='Remove item']").last().click()
        cy.wait(1000)
        cy.url().should('eq','https://magento.softwaretestingboard.com/checkout/cart/')
        cy.get('.cart-empty').should("be.visible").and('contain','You have no items in your shopping cart')
        cy.get('.cart-empty').should("be.visible").and('contain','Click here to continue shopping.')
        cy.get('.cart-empty a').should('contain','here')
       cy.get('.counter-number').should('be.hidden')


    })
});