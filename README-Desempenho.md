# Teste de Carga Simples com k6

Este é um **teste de carga** simples na página inicial do site [`https://paciente-staging.lacreisaude.com.br`](https://paciente-staging.lacreisaude.com.br) utilizando a ferramenta **k6**.

O objetivo é medir:
- Tempo de resposta
- Estabilidade do sistema com múltiplos usuários simultâneos

---

## 📋 Pré-requisitos

Antes de rodar o teste, você precisa ter o **k6** instalado no seu ambiente.

### Instalação do k6

#### Windows
```bash
choco install k6
```
> **Nota:** Execute o `Prompt de Comando` ou `PowerShell` como **Administrador** para usar o Chocolatey.

-

## 🧹 Estrutura do Projeto

- `desempenho.js`: script principal de teste de carga.

---

## 📄 O que o Script faz?

1. Simula usuários acessando a página inicial.
2. Valida se o status da resposta é 200 (OK).
3. Verifica se o tempo de resposta é inferior a 800ms.
4. Sobe e desce a carga de usuários de forma gradual.

### Comportamento de carga:

| Fase             | Duração  | Usuários Ativos |
| ---------------- | -------- | --------------- |
| Ramp-up          | 30 segundos | Até 10 usuários |
| Sustentação      | 1 minuto | 10 usuários |
| Ramp-down        | 30 segundos | 0 usuários |

---

## ▶️ Como rodar o teste

1. Clone este repositório ou copie o script `desempenho.js`.
2. No terminal, navegue até a pasta onde o arquivo `desempenho.js` está.
3. Execute o comando:

```bash
k6 run desempenho.js
```

---

## 📈 Exemplo de Saída Esperada

- Tempo médio de resposta
- Número de requisições realizadas
- Erros (se houver)
- Percentis de resposta (P90, P95, P99)

---

## 🔍 Como analisar o resultado do teste

Após executar o comando `k6 run hdesempenho.js`, o k6 gerará uma saída detalhada no terminal.

### Principais métricas para observar:

- **vus**: Virtual Users (usuários virtuais ativos durante o teste).
- **http_reqs**: Total de requisições HTTP realizadas.
- **http_req_duration**: Tempo de duração das requisições (importante observar os percentis 90, 95 e 99).
- **checks**: Percentual de testes que passaram (ex.: status 200 e tempo de resposta).
- **errors**: Indica falhas nas requisições, se houver.

### Exemplos de análise:

- Se o **P95** de `http_req_duration` estiver abaixo de **500ms**, o sistema está performando bem sob a carga testada.
- Se o percentual de **checks** for menor que 100%, investigue quais requisições falharam.
- Se houver muitos erros de conexão ou timeout, o sistema pode estar instável sob carga.

### Exportando resultados para análise posterior:

Se quiser salvar os resultados em arquivo JSON para relatórios ou análises gráficas:

```bash
k6 run --out json=resultado.json desempenho.js.js
```

Você pode depois importar esses dados no [k6 Cloud](https://k6.io/cloud/) ou utilizar ferramentas como Grafana e InfluxDB para visualização.