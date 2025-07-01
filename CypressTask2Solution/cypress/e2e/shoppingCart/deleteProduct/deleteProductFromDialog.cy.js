/// <referance type="cypress" />

describe('Delete From Cart Functionality', () => {
    beforeEach(()=>{
        cy.addShirtToCart()
    })
    it('validate that the user can delete product from shopping cart dialog' , ()=>{
      cy.wait(3000)
      cy.get('.showcart').click()
      cy.get("[title='Remove item']").click()
      cy.get('.action-accept').click()
      cy.get('.subtitle').first().should('be.visible').and('contain','You have no items in your shopping cart.')
      cy.get('.counter-number').should('be.hidden')


    });

});