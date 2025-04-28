## BUG: APOS CONCLUIR POS-CADASTRO, SISMETA REDIRECIONA O USUARIO PARA PREENCHER O POS-CADATSRO NOVAMENTE

    Descrição: Após o usuario concluir o pos-cadastro, sistema redireciona para o começo do pos-cadastro e só liberando o acesso ao sistema apos segundo preenchimento
    
        Passo-a-passo:
            1 - Cria sua conta
            2 - Faça login no sistema
            3 - Preencha todas as informações de pós-cadastro
            4 - Confirme
            5 - Na tela de conclusão de cadastro clique em "Buscar profissional"

        Resultado atual: redirecionamento para o começo do pós-cadastro

        Resultado esperado: Redirecionamento para tela de busca de profissionais
        
        Ambiente de testes:
            Plataforma: Mobile
            Navegador: Chrome
            Versão: 135.0.7049.111
            Sistema operacional: Android 13
        
        Prioridade: Alta

        Observações: Bug classificado como "Alta" prioridade devido a quebra de fluxo de uso, gerando quebra de expectativa no usuario

## BUG: APOS ALTERAR SENHA, SISMETA REDIRECIONA O USUARIO PARA PREENCHER O POS-CADATSRO

    Descrição: Após o usuario concluir o pos-cadastro, sistema redireciona para o começo do pos-cadastro e só liberando o acesso ao sistema apos segundo preenchimento
    
        Passo-a-passo:
            1 - Tenha uma conta
            2 - Clique em Esqueci minha senha
            3 - Preencha o email da sua conta
            4 - Confirme
            5 - Acesse o link recebido no email
            6 - Digite a sua nova senha e confirme ela digitando novamente
            7 - Confirme 
            8 - Realize o login no sistema com a nova senha


        Resultado atual: redirecionamento para o começo do pós-cadastro

        Resultado esperado: Redirecionamento para tela de busca de profissionais
        
        Ambiente de testes:
            Plataforma: Mobile
            Navegador: Chrome
            Versão: 135.0.7049.111
            Sistema operacional: Android 13
        
        Prioridade: Alta

        Observações: Bug classificado como "Alta" prioridade devido a quebra de fluxo de uso, gerando quebra de expectativa no usuario

    
## MELHORIA: ADICIONAR OPÇÃO PARA ESPIAR SENHA NO LOGIN NA VERSÃO MOBILE

## BUG: AO ALTERAR SENHA MESMO DIGITANDO SENHA VALIDA SISTEMA NÃO RECONEHCIA
    Esse bug devido a falta de tempo não consegui maiores informações
