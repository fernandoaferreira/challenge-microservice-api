## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Deve-se subir um docker com Postgres.

Segue configuração do .ENV]

#NEST-PORT_CONFIG
PORT_SERVER_API=3000

##DATABASE-CONFIG
HOST=localhost
PORT_BD=5433
USERNAME_BD=postgresUser
PASSWORD=digiteSuaSenha
DATABASE=nest

##MAILGUN-CONFIG
MG_API_KEY=Exemplo-kfnçladkfja09890898d0g9sdnglskdng
MG_DOMAIN=Exemplo-sandbox8ac1b55faade4b26b34dfsdfw22d1.mailgun.org

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

## ENDPOINTS:

## Gerar Token
GET: http://localhost:3000/key-integration/generate

## Validar Token
GET: http://localhost:3000/key-integration/validate-key/:token

## Cadastrar email
POST: http://localhost:3000/run-email

{
	"from": "teste@hotmail.com",
	"to": "teste@hotmail.com",
 	"subject": "Assunto",
  "text": "Texto o email"
}

## Pesquisar emails cadastrados
GET: http://localhost:3000/run-email

## Dar start no envio de emails
GET: http://localhost:3000/run-email/start-send

## Buscar emails não enviados por motivo de erro
GET: http://localhost:3000/run-email/failed