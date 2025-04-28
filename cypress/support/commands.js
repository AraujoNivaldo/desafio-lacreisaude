import {faker} from "@faker-js/faker/locale/pt_BR"

Cypress.Commands.add('preencherFormulario', ({
    nome,
    email,
    password,
    aceitarTermos,
    maiorIdade
    }
    ) =>{
        const emailGerado = email ?? faker.internet.email()
        const senhaGerada = password ?? "Senha1234!"
    cy.get('#first_name').clear().type(nome ?? faker.person.firstName())
    cy.get('#last_name').clear().type(nome ?? faker.person.lastName())
    cy.get('#email').clear().type(emailGerado)
    cy.get('#email2').clear().type(emailGerado)
    cy.get('#password1').clear().type(senhaGerada, {log: false}) 
    cy.get('#password2').clear().type(senhaGerada, {log: false}) 
    aceitarTermos || cy.get(':nth-child(1) > label > .check-container > span').click()
    maiorIdade || cy.get(':nth-child(2) > label > .check-container > span').click()
    cy.get('.cEjzSb > .sc-12af5372-1').click()
})

Cypress.Commands.add('vericaConclusaoFormulario', () =>{
    cy.get('h2').should('have.text', 'Estamos quase lá...');
    cy.get('.button-box > .sc-12af5372-0 > .sc-12af5372-1').click()
    cy.url().should('eq', 'https://paciente-staging.lacreisaude.com.br/')
})