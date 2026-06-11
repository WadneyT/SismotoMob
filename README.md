# Sismoto Mobile

Aplicativo mobile desenvolvido em React Native para gerenciamento de produtos, clientes e pedidos do sistema Sismoto.

O aplicativo consome uma API REST desenvolvida em Spring Boot, permitindo operações de cadastro, consulta, alteração e exclusão de dados.

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o Expo:

```bash
npm start
```

Depois, abra o QR Code no Expo Go.

## API

A URL base da API fica em:

```txt
src/servicos/api.js
```

Se estiver usando ngrok, atualize o `baseURL` sempre que o tunel mudar.

## Funcionalidades

### Produtos

* Listar produtos
* Cadastrar produtos
* Alterar produtos
* Excluir produtos

### Clientes

* Listar clientes
* Cadastrar clientes
* Alterar clientes
* Excluir clientes

### Pedidos

* Listar pedidos
* Cadastrar pedidos
* Alterar pedidos
* Excluir pedidos

## Arquitetura

O aplicativo foi desenvolvido utilizando React Native e integração com API REST.

### Estrutura do Projeto

```text
src
├── navegacao
│   └── AppNavigator.js
│
├── paginas
│   ├── Home.js
│   │
│   ├── Produto
│   │   ├── ListarProduto.js
│   │   ├── IncluirProduto.js
│   │   └── AlterarProduto.js
│   │
│   ├── Cliente
│   │   ├── ListarCliente.js
│   │   ├── IncluirCliente.js
│   │   └── AlterarCliente.js
│   │
│   └── Pedido
│       ├── ListarPedido.js
│       ├── IncluirPedido.js
│       └── AlterarPedido.js
│
└── servicos
    └── api.js
```

## Tecnologias Utilizadas

### Frontend

* React Native
* Expo
* Axios
* React Navigation

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* PostgreSQL

## Integração com API

O aplicativo consome a API REST do projeto Sismoto Backend.

### Produtos

```http
GET /produtos
POST /produtos
PUT /produtos/{id}
DELETE /produtos/{id}
```

### Clientes

```http
GET /clientes
POST /clientes
PUT /clientes/{id}
DELETE /clientes/{id}
```

### Pedidos

```http
GET /pedidos
POST /pedidos
PUT /pedidos/{id}
DELETE /pedidos/{id}
```

## Executando o Projeto

### Instalar dependências

```bash
npm install
```

### Executar com Expo

```bash
npx expo start
```

Ou:

```bash
npx expo start --tunnel
```

## Backend

Este projeto depende da API Sismoto Backend desenvolvida em Spring Boot.

Certifique-se de que a API esteja em execução antes de iniciar o aplicativo.

## Autor

Yendaw Santos

Projeto desenvolvido para a disciplina de Desenvolvimento Mobile utilizando React Native e integração com API REST Spring Boot.

