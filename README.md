# 📦 Mini WMS API - Os Bastidores do Back-end

**Olá! Se você está avaliando meu perfil, este repositório é um "livro aberto" sobre a minha evolução como desenvolvedor.**

## 🎯 Por que este projeto existe?
No meu trabalho anterior (com o sistema de logística SkyCargo), eu lidava com telas dando erro e não entendia como o Front-end conversava com o banco de dados. Eu queria desmistificar essa "caixa preta". 

O objetivo deste projeto não foi apenas fazer um CRUD funcionar, mas sim **entender os fundamentos da web e a arquitetura de uma API** antes de dar meu próximo grande passo profissional.

## 🛠️ Tecnologias
* **Node.js + Express:** Construção do servidor, rotas e middlewares.
* **SQL Server:** Banco de dados relacional (via `mssql` e autenticação Windows).
* **Postman:** Testes de requisição (GET, POST) e respostas HTTP.

## 🧠 A Experiência (O que eu realmente aprendi)
Durante a construção deste WMS (Warehouse Management System) simplificado, foquei em sair do "copiar e colar" para dominar os conceitos:

* **Arquitetura em Camadas:** Saí de um `index.js` monolítico para uma estrutura dividida. Entendi o papel de cada peça: a Porta de Entrada (`Index`), o Roteamento (`Routes`), as Regras de Negócio (`Controllers`) e a Persistência (`Database`).
* **Segurança e Estabilidade:** Compreendi na prática que o fluxo assíncrono (`async/await`) evita que o servidor trave. Mais importante: aprendi a usar o `try/catch/finally` não só para ver erros, mas para impedir que o sistema inteiro caia.
* **Fluxo HTTP:** Entendi como os dados trafegam da internet (JSON), passam por Middlewares (filtros) e chegam ao banco de dados com segurança, retornando os Status Codes corretos (200, 201, 400, 404, 500).

## 🚀 Próximos Passos: O Mundo .NET
Este projeto cumpriu seu papel e me deu uma base inabalável de como APIs REST funcionam por debaixo dos panos. 

Agora, estou levando toda essa bagagem estrutural (Controllers, Rotas, Tratamento de Erros e SQL) para o meu foco principal: **C# e ASP.NET Core**.

---
*Sinta-se à vontade para explorar os arquivos. Cada linha de código aqui foi escrita para entender o "porquê", e não apenas o "como".*
