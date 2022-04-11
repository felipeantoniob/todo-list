// @ts-check
/// <reference types="cypress" />

describe('to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const newItem = 'Feed the dog'
  const newItem2 = 'Walk the dog'
  const newItem3 = 'Wash the dishes'

  it('can add new todo items', () => {
    cy.get('[data-cy=todo-input]').type(`${newItem}`)
    cy.get('[data-cy=add-todo').click()
    cy.get('[data-cy=todo-list]')
      .children()
      .should('have.length', 1)
      .last()
      .should('have.text', newItem)

    cy.get('[data-cy=todo-input]').type(`${newItem2}`)
    cy.get('[data-cy=add-todo').click()
    cy.get('[data-cy=todo-list]')
      .children()
      .should('have.length', 2)
      .last()
      .should('have.text', newItem2)
  })

  it('can check off an item as completed', () => {
    cy.get('[data-cy=todo-input]').type(`${newItem}{enter}`)
    cy.get('[data-cy=add-todo').click()
    cy.contains(newItem).parent().find('input[type=checkbox]').check()

    cy.contains(newItem).should('have.class', 'completed')
  })
  context('with a checked task', () => {
    beforeEach(() => {
      cy.get('[data-cy=todo-input]').type(`${newItem}{enter}`)
      cy.get('[data-cy=add-todo').click()
      cy.contains(newItem).parent().find('input[type=checkbox]').check()

      cy.get('[data-cy=todo-input]').type(`${newItem2}{enter}`)
      cy.get('[data-cy=add-todo').click()
    })

    it('can filter for uncompleted tasks', () => {
      cy.get('[data-cy=todo-selector]').select('uncompleted')

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('[data-cy=todo-list]')
        .children()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Feed the dog').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      cy.get('[data-cy=todo-selector]').select('completed')

      cy.get('[data-cy=todo-list]')
        .children()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Feed the dog')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can filter for all tasks', () => {
      cy.get('[data-cy=todo-selector]').select('all')

      cy.get('[data-cy=todo-list]')
        .children()
        .should('have.length', 2)
        .first()
        .should('have.text', 'Feed the dog')

      cy.get('[data-cy=todo-list]')
        .children()
        .should('have.length', 2)
        .last()
        .should('have.text', 'Walk the dog')
    })

    it('can delete a task', () => {
      cy.get('[data-cy=todo-selector]').select('all')

      cy.get('[data-cy=delete-todo]').first().click()
      cy.contains('Feed the dog').should('not.exist')
    })

    it('can edit a task', () => {
      cy.get('[data-cy=update-todo]').first().click()
      cy.get('[data-cy=todo-input]').clear().type(`${newItem3}{enter}`)
      cy.get('[data-cy=add-todo').click()

      cy.get('[data-cy=todo-list]')
        .children()
        .should('have.length', 2)
        .first()
        .should('have.text', newItem3)
    })
  })
})
