describe('Brooks menu main page', () => {
    beforeEach(() => {
        cy.visit('https://expz.menu/7a1e0cf8-96e0-4fdf-93df-49db5ad755d0/')
      })

    it('check main title', () => {
        cy.title().should('include', 'BROOKS')
    })

    it('check infoblock title', () => {
        cy.contains('h2', 'Про заклад').scrollIntoView().should('be.visible')
        cy.contains('Про заклад').siblings('p').should('not.be.empty')
    })

    it('check lang switch', () => {
        cy.get('div > button').should('be.visible')
        cy.wait(3000)
        cy.get('.base-icon-content').click()
        cy.get('.main-menu-item').contains('EN').should('be.visible')
        cy.get('.main-menu-item').contains('EN').click()
        cy.contains('h2', 'About us').scrollIntoView().should('be.visible')
        cy.contains('About us').siblings('p').should('not.be.empty')
    });

    it('check menu contains sections', () => {
        cy.get('.main-menu').find('a').should('be.visible')
        cy.contains('Take away').scrollIntoView().should('be.visible')
    })

    it('shows references section with links', () => {
        cy.get('.about-list').scrollIntoView().should('be.visible')
        cy.get('.about-list').children('.about-item').should('have.length', 4)
        cy.contains('Адреса').should('be.visible')
        cy.contains('Робочі години').should('be.visible')
        cy.contains('Доставка').should('be.visible')
        cy.contains('Телефон').should('be.visible')
    })
})
