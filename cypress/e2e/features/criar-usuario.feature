Feature: Criar conta

    Scenario: Criar nova conta
        Given eu estou na tela de cadastro
        When eu preencho os campos ovrigatorios corretamente e confirmo
        Then eu devo ser redirecionado para a tela com aviso sobre o link de confirmacao