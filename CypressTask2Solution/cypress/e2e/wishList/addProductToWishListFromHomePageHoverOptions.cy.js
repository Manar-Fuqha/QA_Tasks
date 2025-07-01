/// <referance type="cypress" />

describe('Check Add To WishList Functionality', () => {
    before(()=>{
        const email = 'ManarFuqha272@gmail.com'
        const pass ='test@123'
        cy.loginToMagento(email , pass)
    });
    it('validate that the user can add the product to the wishlist from homePage hover options' , ()=>{
        cy.wait(3000)
        cy.get("[title='Add to Wish List']").eq(4).click({force:true})
        cy.wait(5000)
        cy.get("[role='alert']").should('contain' , "Fusion Backpack has been added to your Wish List. Click here to continue shopping.")
        cy.get("[role='alert'] a").should('contain' , "here")
        cy.get(".page-title").should('contain' , "My Wish List")
        cy.get(".toolbar-number").first().should('contain' , "1 Item")
        cy.get(".block-wishlist .block-title").should("be.visible").and('contain' , "My Wish List")
        cy.get(".block-wishlist .block-title").should("be.visible").and('contain' , "1 item")
        cy.get(".block-wishlist .block-content").should("be.visible")
        cy.get("[title='Update Wish List']").should("be.visible").and("contain" , "Update Wish List")
        cy.get("[title='Share Wish List']").should("be.visible").and("contain" , "Share Wish List")
        cy.get("[title='Add All to Cart']").should("be.visible").and("contain" , "Add All to Cart")
        cy.get(".items li").eq(3).should("have.class", "current")
        cy.url().should('include' , 'https://magento.softwaretestingboard.com/wishlist/index/index/wishlist_id/')
        cy.screenshot({capture:"fullPage"})
    });

});