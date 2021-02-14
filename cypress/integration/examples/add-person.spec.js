/// <reference types="cypress" />

context('Actions', () => {
  it('visit page', () => {
    cy.visit('/')
  })  
  
  // https://on.cypress.io/interacting-with-elements

  it('contains text Smoelenboek', () => {
    cy.contains('Smoelenboek') 
  })

  it ('contains button add', () => {
    cy.get('button#expand-add-person').should('exist');
  })

  it ('not contains button add person fiels', () => {
    cy.get('input#add-person-name').should('not.exist');
    cy.get('input#add-person-age').should('not.exist');
    cy.get('input#add-person-city').should('not.exist');  
    cy.get('input#cancel-add-person').should('not.exist');
    cy.get('input#confirm-add-person').should('not.exist');  
  })

  it('expands add person', () => {
    cy.get('button#expand-add-person').click()
    cy.get('input#add-person-name').should('exist');
    cy.get('input#add-person-age').should('exist');
    cy.get('input#add-person-city').should('exist');  
    cy.get('button#cancel-add-person').should('exist');
    cy.get('button#confirm-add-person').should('exist');
  })

  it('sets person name', () => {
    cy.get('input#add-person-name').type('Jan')    
  })

  it('sets person age', () => {
    cy.get('input#add-person-age').type('34')
  })

  it('sets person city', () => {
    cy.get('input#add-person-city').type('Veghel')
  })

  it('confirms add person', () => {
    cy.get('button#confirm-add-person').click()

    cy.get('ul#people-list').children().should('have.length', 2)
    cy.get('ul#people-list').children().last().contains('Jan - 34 - Veghel')

  })



})
