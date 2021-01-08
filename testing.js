let config = require('../config.json')
describe("testing.kriyadocs", () => {
    //login to testing site
    it('login test', () => {
        cy.visit("https://testing.kriyadocs.com/peerreview_editor?doi=medwave_2021_101&customer=medwave&project=medwave&type=journal");
        cy.get('#username').type('nithish.k@exeterpremedia.com');
        cy.get('#password').type('nithishNK86808@');
        cy.contains('Login').click();
        if (cy.get('.confirmationPanel').should('have.class', 'hide')) {
            cy.get('.confirm').click();
        }
    })
    // it('checking style',()=>{
    //     //checking title
    //     cy.get('.jrnlArtTitle').should('be.visible')
    //     //checking author
    //     cy.get('.jrnlAuthors').should('be.visible')

    // })
    it('customer page', () => {
        //session time
        cy.get('.action-labels .sesscion-time').contains(' Session Time: ')
        //checking button
         cy.get('.action-btn-container .button').should('be.visible')
             //     //checking text in manuscript
       //  cy.get('.WordSection1').should('be.visible')
             //     //checking figure text in figures section
        cy.get('.figuresList').contains('firefox-error.png')
       // cy.get('#contentContainer').should('be.visible')
        cy.get('.nav-btn-containers').click()
    })
     it("1",()=>{
         cy.wait(10000)
    //     //checking for confidential icon
         cy.get('.custom-switch').eq(0).click()
     })
     it('2',()=>{
        cy.wait(5000)
    //     //checking for writing text in comment
         cy.get('.col-12 .comment-text').type('new comment')
     })
     it('3',()=>{
         cy.wait(5000)
    //     //checking for saving comment
         cy.get('.col-12').find('button').eq(1).click()
     })
     it('4',()=>{
         cy.wait(10000)
         cy.get('.query-edit').click()
         cy.get('.save-edit').click()
         cy.get('.query-delete').click()
     })

    // it('make decision button',()=>{
    //     //checking decsion button
    //     cy.get('button[data-name="makeDecision"]').click()
    //     //checking the text at top left of the 
    //     // cy.get('.sf-decsion-sec').find('p').each((item) => {
    //     //     cy.wrap(item).should('be.visible')
    //     // })
    //     //checking summary notes
    //     cy.get('.sf-sec-label').should('be.visible')
    //     cy.get('.sf-summary-notes').type('sample text to enter in summary notes')
    //     //checking email template
    //     cy.get('.sf-email-info').eq(1).should('be.visible')
    //   //  cy.get('.modal-footer').find('button').should('be.visible')

    // })
})
