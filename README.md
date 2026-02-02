🛒 Mini E-Commerce API (NestJS)

Esta API funciona como o backend de um mini e-commerce, fornecendo dados de produtos de forma simples e eficiente. O objetivo do projeto é demonstrar a construção de uma API REST organizada, seguindo boas práticas de arquitetura com NestJS.

A documentação serve como um guia completo de uso e entendimento do projeto, permitindo que qualquer pessoa consiga rodar, consumir e avaliar a API de forma autônoma.

❓ Por que NestJS?

O NestJS foi escolhido por oferecer uma arquitetura bem definida e amplamente utilizada em projetos profissionais com Node.js.

Principais motivos da escolha:

Organização modular clara

Separação de responsabilidades (Controller, Service, Entity)

Facilidade de manutenção e escalabilidade

Uso de padrões consolidados no mercado

Ótima integração com TypeScript

Mesmo sendo um projeto simples, o uso do NestJS permite manter uma base sólida e preparada para crescimento.

🏗️ Estrutura do Projeto

A aplicação segue a arquitetura padrão do NestJS, focada em clareza e responsabilidade única para cada camada:

Entity
Define o modelo de dados do produto e aplica validações através de decoradores.

Service
Centraliza a regra de negócio e gerencia a leitura dos dados a partir do arquivo JSON.

Controller
Responsável por expor os endpoints HTTP e retornar as respostas ao cliente.

Essa divisão facilita testes, manutenção e evolução do código.

📦 Persistência de Dados (Decisão Técnica)

Em vez de utilizar um banco de dados relacional ou NoSQL, o projeto utiliza um arquivo JSON estático como fonte de dados.

Essa decisão foi tomada porque:

O escopo do projeto é simples e focado em API

Não há necessidade de configuração de banco externo

Facilita o deploy e o uso em ambientes de teste

Reduz complexidade sem comprometer o objetivo do projeto

Essa abordagem simula uma persistência de dados sem adicionar dependências desnecessárias.

🚀 Endpoints Disponíveis
🔹 Listar todos os produtos
GET /products


Retorna a lista completa de produtos.

🔹 Buscar produto por ID
GET /products/:id


Retorna os dados de um produto específico com base no ID informado.

⚙️ Como Rodar o Projeto Localmente
Pré-requisitos

Node.js (versão LTS recomendada)

npm

Passo a passo
# clonar o repositório
git clone <url-do-repositorio>

# acessar a pasta do projeto
cd mini-ecommerce-api

# instalar as dependências
npm install

# iniciar a aplicação em modo desenvolvimento
npm run start:dev


A aplicação ficará disponível em:

http://localhost:3000

🌐 Deploy Público

A API está disponível online no link abaixo:

🔗 https://minibackend-oo7g.onrender.com

📌 Considerações Finais

Projeto voltado para estudo, testes de frontend ou avaliação técnica

Estrutura simples, mas alinhada a boas práticas de backend

Fácil de expandir com novos endpoints ou integração com banco de dados real

Código organizado e de fácil leitura

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
