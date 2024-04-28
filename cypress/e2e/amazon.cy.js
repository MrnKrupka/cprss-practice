describe('Amazon', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/')
  })

  it('Check commands', { defaultCommandTimeout: 10000 }, () => {
    cy.get('#nav-link-accountList > span').as('accNList').click()

    cy.go('back')
    cy.url().should('eq', 'https://www.amazon.com/')

    cy.go('forward')
    cy.url().should('include', 'amazon.com')


    cy.get('input[type="submit"]:nth-child(1)').should('have.attr', 'class', 'a-button-input')
    cy.get('input[type="submit"]:nth-child(1)').then(el => {
      el.addClass('my-custom-class')
    })

    cy.get('input[type="email"]').type('notvaliq@gmail.com')
    cy.get('input[type="email"]').blur()
    cy.get('input[type="email"]').type('{enter}')

    cy.get('.a-divider-normal').parent().should('have.class', 'a-section')

    cy.get('.a-section').children().should('have.length', 39)

    cy.get('input[type="email"]').focus()

    cy.get('#ap_email').should(el => {
     expect(el).to.have.value('notvaliq@gmail.com')
    })

    cy.screenshot()

    cy.task('myCustomTask', { data: 'Test is done' }).then(response => {
    console.log(response)
    })
  })
})




