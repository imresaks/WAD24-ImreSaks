/// <reference types = "cypress"/>  

it('Test', () => {
    cy.visit('http://localhost:8080/Instructor')
    cy.get('h1').contains('Instructor Management Pannel')
    cy.get('tbody tr').first().find('input[name="hws"]').clear().type('20')
    cy.get('tbody tr').first().find('button.update').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.get('tbody tr').first().find('td').last().click()
  })



