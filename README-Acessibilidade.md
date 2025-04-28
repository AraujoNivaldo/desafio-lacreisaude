
# 📄 Teste de Acessibilidade Automatizado

## Descrição

Esta automação de testes de **Acessibilidade** utilizando o [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) em modo headless, focado em validar a conformidade com as diretrizes **WCAG 2.1**.

O objetivo é garantir que a aplicação `https://paciente-staging.lacreisaude.com.br/` esteja acessível para usuários que dependem de:

- Navegação por teclado
- Leitores de tela
- Contraste e legibilidade adequados

A automação gera relatórios em formato **HTML**, que podem ser utilizados para auditoria, documentação e melhoria contínua do produto.

---

## O que foi feito

- Criado um script em Node.js (`scripts/lighthouse-acessibilidade.js`) para executar o Lighthouse de forma automática.
- O teste foca **exclusivamente** na categoria **Accessibility** do Lighthouse.
- Geração de relatórios de acessibilidade nomeados com data e hora de execução.
- Relatórios armazenados no diretório `lighthouse-reports/`.

---

## Como executar o teste

1. Instale as dependências:

```bash
npm install --save-dev lighthouse
```
2. Execute o teste de acessibilidade:

```bash
npm run test:acessibilidade
```

O script irá:
- Acessar a aplicação de staging
- Rodar as auditorias de acessibilidade
- Gerar um arquivo HTML contendo o relatório

---

## Onde encontrar o relatório

Após a execução, o relatório será salvo em:

```bash
lighthouse-reports/acessibilidade_YYYY-MM-DD_HH-MM-SS.html
```

> Exemplo: `lighthouse-reports/acessibilidade_2025-04-27_15-30-45.html`

Cada execução gera um arquivo diferente, mantendo o histórico de testes.

---

## Como utilizar o relatório

- **Abrir o HTML** no navegador para visualizar:
  - A pontuação geral de acessibilidade
  - Problemas detectados (e suas localizações)
  - Sugestões de correção
---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse)
- [Google Chrome](https://www.google.com/chrome/)

---
