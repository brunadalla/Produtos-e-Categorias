odutos e Categorias
Projeto realizado no quarto módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**

O objetivo desse projeto é desenvolver um serviço de back-end responsável por gerenciar produtos e suas categorias.

Esse serviço possui uma API REST e um banco de dados PostgreSQL.

Endpoints do serviço:

- **POST /categories** - Criação de categorias;
- **GET	/categories**	- Lista todos os categorias;
- **GET	/categories/<id>** - Retorna os dados de uma categoria;
- **PATCH /categories/<id>** - Atualiza os dados de uma categoria;
- **DELETE /categories/<id>** - Deleta categorias do banco;
- **POST /products** - Criação de produtos;
- **GET	/products** - Lista todos os produtos;
- **GET	/products/<id>** - Retorna os dados de um produto;
- **PATCH /products/<id>** - Atualiza os dados de um produto;
- **DELETE /products/<id>** - Deleta produtos do banco;
- **GET	/products/category/<category_id>** - Retorna os dados dos produtos pertencentes a categoria dona do id.

Funcionalidades: 
- Criação de uma tabela de categorias chamada "categories", com os seguintes dados:
1. id - Id da categoria, um número inteiro e único, usado como chave primária;
2. name - Nome da categoria, uma string única;

- Criação de uma tabela de produtos chamada "products", com os seguintes dados:
1. id - Id do produto, um uuidv4 que pode ser gerado por padrão na tabela ou gerado no service de criação na API;
2. name - Nome do produto, uma string;
3. price - Preço do produto, um número com dois dígitos após a virgula;
4. category_id - Id da categoria que o produto pertence, contém uma relação de 1-n com a chave "id" das categorias. Pode ser nulo.
