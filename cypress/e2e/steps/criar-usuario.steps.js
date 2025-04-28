import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ==================================================
// Scenario 1: Criar nova conta
//===================================================
Given("eu estou na tela de cadastro", function(){
    cy.visit(`${Cypress.env('frontUrl')}cadastro`)
})
When("eu preencho os campos ovrigatorios corretamente e confirmo", function() {
    cy.preencherFormulario({})
})

Then("eu devo ser redirecionado para a tela com aviso sobre o link de confirmacao", function(){
    cy.vericaConclusaoFormulario()
})
