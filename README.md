# CRUD de Pessoas

Aplicação fullstack para gerenciamento de pessoas, com operações de cadastro, listagem, edição e remoção.

## Tecnologias

**Backend**
- Node.js
- Express
- SQLite

**Frontend**
- HTML
- CSS
- JavaScript

## Como rodar o projeto

### Pré-requisitos
- Node.js instalado

### Backend
```bash
cd backend
npm install
npm run dev
```

O servidor vai rodar em `http://localhost:3000`

### Frontend

Abra o arquivo `frontend/index.html` diretamente no navegador.

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /pessoas | Lista todas as pessoas |
| GET | /pessoa/:id | Busca uma pessoa por ID |
| POST | /pessoa | Cadastra uma nova pessoa |
| PUT | /pessoa/:id | Atualiza uma pessoa |
| DELETE | /pessoa/:id | Remove uma pessoa |

### Exemplo de body (POST/PUT)
```json
{
  "nome": "Vinícius Soares",
  "email": "vinicius@email.com",
  "dataNasc": "2000-01-01"
}
```

## Funcionalidades

- Listar todas as pessoas cadastradas
- Cadastrar nova pessoa
- Editar dados de uma pessoa
- Remover uma pessoa
- Buscar pessoa por ID
- Layout responsivo
```
