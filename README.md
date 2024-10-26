# NestJS Hello World Project

Este é um projeto básico em NestJS criado para praticar e entender o desenvolvimento de rotas e serviços com MongoDB. O projeto utiliza **Papr** para manipulação de schemas e documentos MongoDB, é estruturado com a **Arquitetura DDD (Domain-Driven Design)** e implementado com **TypeScript** para uma melhor tipagem e desenvolvimento seguro.

## Tecnologias Utilizadas

- **NestJS**: Framework para Node.js com foco em escalabilidade e modularidade.
- **Papr**: Biblioteca para definição de schemas e validação de dados no MongoDB.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **DDD (Domain-Driven Design)**: Arquitetura que organiza o projeto em domínios, facilitando a manutenção e expansão do código.

## Estrutura do Projeto

O projeto segue uma estrutura baseada em DDD:

src/
├── application/     # Lógica de aplicação e serviços
├── domain/          # Entidades e schemas
├── infra/           # Configurações de banco de dados e serviços externos
└── interface/       # Controllers e rotas

## Rotas

Aqui estão as rotas implementadas no projeto:

1. **GET /hello-world/:id** - Busca uma mensagem específica pelo ID.
2. **POST /hello-world** - Cria uma nova mensagem.
3. **GET /hello-world/all** - Retorna todas as mensagens salvas.
4. **GET /hello-world/new-route** - Retorna uma mensagem fixa `"Hello from the new route!"`.

## Exemplo de Uso

1. **Buscar uma Mensagem por ID**:
   GET http://localhost:3000/hello-world/671cfd2aa032f18a03098670

2. **Criar uma Nova Mensagem**:
   POST http://localhost:3000/hello-world

   Corpo da requisição (JSON):
   {
     "message": "Hello, world!"
   }

3. **Buscar Todas as Mensagens**:
   GET http://localhost:3000/hello-world/all

4. **Ver a Nova Rota**:
   GET http://localhost:3000/hello-world/new-route

## Visualização das Rotas no Insomnia

Abaixo está uma visualização das rotas configuradas no Insomnia para facilitar o uso:

![Rotas no Insomnia](file-T7uyyit4vvxRc7CWDtjT9FoR)

## Como Rodar o Projeto

1. Clone o repositório
2. Instale as dependências:
   yarn install
3. Configure o arquivo .env com a URL do MongoDB:
   MONGODB_URI=mongodb://seu_usuario:sua_senha@localhost:27017/hello_world_db
4. Inicie o servidor:
   yarn start:dev

O projeto estará disponível em http://localhost:3000.
