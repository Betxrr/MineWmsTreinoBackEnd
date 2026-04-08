# 🚀 API de Fundamentos: Controle de Inventário (PoC)

**Este repositório é um projeto de treinamento focado na implementação de padrões fundamentais de Back-end utilizando Node.js e banco de dados relacional.**

## 🎯 Objetivo do Projeto
O propósito deste projeto é consolidar os pilares de uma API robusta: a comunicação eficiente entre o servidor e o banco de dados SQL Server, garantindo que o fluxo de dados siga padrões de mercado em termos de organização e segurança.

## 🏗️ Arquitetura e Organização
Optei por uma **Arquitetura em Camadas (Layered Architecture)** para garantir a separação de responsabilidades e facilitar a manutenção do código:

* **`index.js`**: Ponto de entrada da aplicação e configuração do servidor Express.
* **`routes/`**: Camada de roteamento, responsável por desacoplar as URLs da lógica de execução.
* **`controllers/`**: Camada de lógica, onde as requisições são processadas e as respostas são formuladas.
* **`database/`**: Camada de persistência, isolando a conexão e as queries ao SQL Server.

## 🛠️ Stack Técnica
* **Runtime:** Node.js
* **Framework:** Express
* **Banco de Dados:** SQL Server (Driver `mssql`)
* **Ferramenta de Teste:** Postman (Validação de contratos e rotas HTTP)

## 🧠 Destaques Técnicos
Neste treinamento, foquei em aplicar soluções para desafios reais do desenvolvimento backend:

1. **Fluxo Assíncrono:** Implementação de `async/await` para evitar o bloqueio do Event Loop em chamadas de I/O ao banco de dados.
2. **Resiliência:** Uso estratégico de blocos `try/catch/finally` para garantir que a aplicação não interrompa a execução em cenários de erro e que as conexões com o banco sejam encerradas corretamente.
3. **Padronização HTTP:** Utilização rigorosa dos verbos (GET, POST) e códigos de status (200, 201, 400, 404, 500) para fornecer feedbacks claros ao consumidor da API.
4. **Integração Relacional:** Prática de CRUD e manipulação de dados diretamente via SQL Server (T-SQL).

---
*Este é um projeto de estudo técnico. Sinta-se à vontade para analisar a estrutura de pastas e a lógica de implementação.*
