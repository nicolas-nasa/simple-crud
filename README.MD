# A Simple TS Projet Crud

## Introduction

This project is a simple CRUD RESTful API, using Node.js with typescript.

## Project Requirements

-   Unit tests
-   Authentication
-   Documentation
-   Security measures to prevent SQL or XSS Injection.

## Get Start

To Run this project you need install a [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/en/docs/install).

-   Run a yarn command in your terminal to get dependencies using:

```
yarn install
```

-   to start the project use command:

```
yarn start
```

-   To check if your application is running and test endpoints access documentation endpoint in your browser [Documentation](http://localhost:2702/api/swagger).

## Test Application

All tests is created with a jest, to find in project just go to controller or repository folder, extension of the files is "\*.spec.ts".

-   to run a all test use yarn test

```
yarn test
```

## Documentation

Api documentation is created using swagger, there is possible to find all endpoints and use cases just go to [Documentation](http://localhost:2702/api/swagger).

## Security

Something used to prevent injection-type attacks is an Sequelize, Hemet and Cors

## Authentication

To more security is used a JWT auth, to generate a token wen you have credentials
