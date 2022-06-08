import { When, Then } from 'cypress-cucumber-preprocessor/steps'

const DUMMY_MOBILE_NUMBER = "9619836216";

When('I login', () => {

      cy.loginWith({DUMMY_MOBILE_NUMBER})
    
})

Then('the url is {word}', (url) => {

      cy.visit("https://sbi.bnpl-demo.com/")
      cy.get("#signinbutton").click()

})

Then('click submit button', () => {

    cy.url().should('include', '/transactions')
    
})
