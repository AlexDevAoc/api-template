<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecución en desarrollo

1. Clonar Repositorio ```api-template``` en la rama correspondiente
<br>
<br>

2. Ejecutar
```
npm install
```
<br>

3. Tener Nest CLI instalado (Ejecutar comando con permisos de administrador linux: sudo, windows: ejecutar cmd como administrador)
```
npm i -g @nestjs/cli
```
<br>

4. Clonar Archivo ```.env.template.dev``` y renombrarlo a ```.env``` modificar valores de acuerdo al ambiente.
```bash
#DB CONFIG
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=dbname
DB_HOST=host
DB_PORT=port

#PORT CONFIG
#DEFAULT VALUE 3000
API_PORT=
```
<br>

5. Levantar la DB con el siguiente comando
```
docker-compose up -d
```
<br>

6. Levantar modo desarrollo 
```
npm run start:dev
```
<br>

7. Probar API con el siguiente endpoint
```
http://localhost:3000/api/explorer
```
<br>

## Comandos para ejecutar la App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
$ npm run test

# pruebas e2e
$ npm run test:e2e

# pruebas de cobertura
$ npm run test:cov
```

## Stack Utilizado
- Node 20.16.0
- PostgreSQL 14.3
- NestJs 10.4.4