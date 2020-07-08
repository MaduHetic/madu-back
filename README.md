# MADU Back


## Description
    API REST du back office de madu
    
## Equipe
* [Clément Haller](https://github.com/Telmalk) (dev back api)
* [Guillaume Cornet](https://github.com/vinicel) (infra/server)

## Techno
* NestJS
* MySQL
* TypeOrm
* json web token pour l'authentification a l'api


## Documentation
* Compodoc(http://${URL}:8081)
* Swagger (http://${URL}:3000/documentation/)

## UML Base de donnée
![Schema Base de donnée](./asset/maduBdd2.png)

## Commande
### lancer l'app en dev:
    - yarn install
    - docker-compose up
### Test
    - yarn test
    - yarn test:watch
    - yarn test:cov
    - yarn test:debug
    
## Lint
    - yarn lint
### Prod
    - yarn build
    - yarn start:prod
