
# Caso de Teste: Teste de Responsividade da Página Inicial

**ID:** CT-RESP-001  
**Título:** Verificar responsividade do site em diferentes dispositivos (mobile e desktop)  
**URL:** https://paciente-staging.lacreisaude.com.br/  

## Pré-requisitos
- Ter acesso à internet.
- Acesso à ferramenta de inspeção (DevTools do navegador) ou dispositivos reais.

## 📱 Cenário 1: Acesso via Dispositivo Móvel (Samsung Galaxy S20 FE)

**Passos:**
1. Acessar a URL no navegador do dispositivo Samsung Galaxy S20 FE ou usar DevTools em modo de simulação (ex: S20 FE).
2. Verificar se o layout se ajusta corretamente à largura da tela.
3. Navegar entre os principais elementos (menu, login, etc).
4. Testar cliques em botões, links e campos de formulário.
5. Verificar se o conteúdo está visível sem necessidade de rolagem horizontal.
6. Avaliar se os elementos interativos têm tamanho adequado ao toque (ex: botões não muito pequenos).
7. Testar performance de carregamento.

**Resultados esperados:**
- Layout adaptado ao tamanho da tela.
- Nenhuma quebra de layout.
- Elementos interativos funcionando corretamente.
- Boa usabilidade e legibilidade dos textos.
- Sem rolagem horizontal.
- Sem sobreposição de elementos.

**Resultados Obtidos:**
- Quebra de layout no perfil do usuario, as tags do usuario ficam sobrepostas
- Na tela de contatar profissional o campo para digitar o codigo recebido via SMS não esta centralizado

## 🖥️ Cenário 2: Acesso via Desktop (resolução 1920x1080)

**Passos:**
1. Acessar a URL em um navegador desktop.
2. Verificar se o layout está centralizado e aproveita bem o espaço horizontal.
3. Navegar pelos elementos e seções da página.
4. Testar login, formulários, navegação pelo menu.
5. Redimensionar o navegador para ver o comportamento do layout em transições.

**Resultados esperados:**
- Layout bem distribuído e proporcional.
- Elementos posicionados corretamente, sem sobreposição.
- Funcionalidades acessíveis e funcionando sem erros.
- Responsividade mantida ao redimensionar a janela.