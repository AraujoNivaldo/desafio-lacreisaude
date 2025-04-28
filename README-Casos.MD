# Confguração do ambiente

  Celular S20 FE - Android 13
  Ambiente Navegador Chrome Versao 135.0.7049.111
  Para executar os testes apenas acesse o link fornecido e siga os Cenarios

# Processo de QA

  Primeiro criei uma conta e decidi explorar o sistema para entender como o fluxo funcionava
  para onde cada pagina levava, o que cada botão fazia, onde ficava cada coisa.
  Apos essa analise exploratoria decidi criar os casos solicitados, primeiramente fiz pelo desktop,
  após fazer pelo desktop realizei os casos pelos mobile, e onde foram realizadas as gravações tambem
  tudo feito manualmente

# Casos de Teste

## Funcionalidade: Cadastro da pessoa usuária

Funcionalidade: Cadastro da pessoa usuária

  Cenário: Realizar cadastro e buscar profissional de saúde
    Dado que estou na página de cadastro
    Quando eu preencho todos os dados obrigatórios corretamente
    E confirmo o cadastro
    Então devo receber um email de confirmacao de cadastro
    Quando eu acesso o link de confirmacao
    E eu realizo o login
    Então eu devo ser redirecionado para a etapa de pós-cadastro
    Quando eu preencho todas as informações corretamente
    Então eu devo receber uma tela de notificacao de cadastro concuido
    E eu clico em Buscar profissional
    Então devo ser redirecionado para a pagina de busca de profissionais disponíveis


## Funcionalidade: Busca de um profissional de saúde

Funcionalidade: Busca de um profissional de saúde

  Cenário: Buscar e contatar profissional de saúde
    Dado que estou na tela de busca de profissionais
    Quando eu informo os critérios de busca
    E confirmo a pesquisa
    Quando seleciono um profissional da lista
    Então devo visualizar os detalhes do profissional
    Quando eu clico em contatar Exibir contato
    E confirmo meu numero de contato
    E digito o codigo recebido via SMS
    Então devo ver as opções de contato disponíveis

## Funcionalidade: Edição de perfil da pessoa usuária


Funcionalidade: Edição de perfil da pessoa usuária

  Cenário: Atualizar informações do perfil
    Dado que estou logado e na página de perfil
    Quando eu clico em Editar dados e altero minhas informações pessoais
    E salvo as alterações
    Então as informações devem ser atualizadas com sucesso
    E devo visualizar os dados atualizados corretamente

  Cenário: Atualizar foto do perfil
    Dado que estou logado e na página de perfil
    Quando eu clico em Editar foto e altero minhas informações pessoais
    E salvo as alterações
    Então as informações devem ser atualizadas com sucesso
    E devo visualizar os dados atualizados corretamente


## Funcionalidade: Esquecer senha e resetar

Funcionalidade: Esquecer senha e resetar

  Cenário: Recuperar e resetar senha via e-mail
    Dado que estou na tela de login
    Quando eu clico em "Esqueci minha senha"
    E informo meu e-mail cadastrado
    Então devo receber um e-mail com o link de recuperação
    Quando eu acesso o link de recuperação
    E defino uma nova senha e confirmo ela
    Então devo ver uma mensagem de sucesso
    E devo conseguir logar com a nova senha

