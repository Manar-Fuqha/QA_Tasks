/// <referance type="cypress" />

describe('Submit review functionality', () => {
    it('validate that the user can submit a review on the product page' , ()=>{
        cy.visit('/')
        cy.get('.product-item-photo').eq(3).click()
        cy.wait(2000)
        cy.url().should('eq','https://magento.softwaretestingboard.com/hero-hoodie.html')
        cy.get('#tab-label-reviews-title')
                .should("be.visible")
                .and("contain","Reviews")
                .click()
                        
        cy.get(".review-legend")
                .should("be.visible")
                .and("contain","You're reviewing:")

        cy.get(".review-field-ratings .label")
                .should("contain" , "Your Rating")

        cy.get(".review-field-rating .label")
                .should("contain" , "Rating")
        cy.get("#Rating_5_label")
                .should("be.visible")
        cy.get("[for='Rating_3']")
                .click({force:true})
        cy.get("[for='nickname_field']")
                .should("be.visible")
                .and("contain","Nickname")
        cy.get('#nickname_field')
                .clear()
                .type('Manar')
        cy.get("[for='summary_field']")
                .should("be.visible")
                .and("contain","Summary")
        cy.get('#summary_field')
                .clear()
                .type('What a versatile shirt!')
        cy.get("[for='review_field']")
                .should("be.visible")
                .and("contain","Review")
        cy.get('#review_field')
                .clear()
                .type('good.')
        cy.get('.submit')
                .should("be.visible")
                .and("contain" , "Submit Review")
                .click()
        cy.wait(2000)
        cy.get("[role='alert']")
                .should("be.visible")
                .and('contain' , 'You submitted your review for moderation.')

    });

});