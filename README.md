# avro-rest-js
simple lab applying [avsc](https://github.com/mtth/avsc) and learn by doing:

1. how to create a trivial nodejs express REST API server that receive and send avro buffer in request/response
2. how to call REST API that send and receive avro buffer client side javascript


# Badges
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=alert_status)](https://sonarcloud.io/dashboard?id=avro-rest-js)
<!--
[![Sonarcloud coverage](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=coverage)](https://sonarcloud.io/dashboard?id=avro-rest-js)
-->
[![Sonarcloud sqale_index](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=sqale_index)](https://sonarcloud.io/dashboard?id=avro-rest-js)

[![Sonarcloud security_rating](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=security_rating)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=avro-rest-js)

[![Sonarcloud ncloc](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=ncloc)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud bugs](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=bugs)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=avro-rest-js)
[![Sonarcloud code_smells](https://sonarcloud.io/api/project_badges/measure?project=avro-rest-js&metric=code_smells)](https://sonarcloud.io/dashboard?id=avro-rest-js)

[![License](https://img.shields.io/badge/License-MIT.svg)](https://opensource.org/licenses/MIT)

## Getting started

### Clone the project

``` bash
git clone https://github.com/rondinif/avro-rest-js.git
```
### Install dependencies and dev-dependencies

``` bash
npm install
```

## Run and Debug
In this lab you want to open 3 terminals: 
 - one for mongodb ( start mongod and run queries in mongo shell )
 - one to run the sever-side ( classi NodeJS Express REST-API server on port 3000)
 - one to run the client-side ( html, javascript served on port 9090 )

and 1 browser: hopefully Chrome with DevTools for debugging client-side JS 

### Start Mongodb
#### if you have mongod istalled 
``` bash 
$ mongod --config  ${YOUR_MONGO_CONFIGURATION} 
```
#### if you want to run mongo in a container
```
$ cd docker 
$ docker-compose up

```
#### if you want to install locally only the `mongo` client 
```
$ brew tap mongodb/brew
$ brew install mongodb-community-shell
```

### Start Server side API

``` bash
$ npm run start
```
or:
``` bash 
$ DEBUG=api:* npm start
```

### Build and Start Client web-app with python
``` bash
$ npm --ignore-scripts=false run build-client-side

> avro-rest-js@0.1.0 build-client-side /Users/ronda/projects/learning-avro/lab05-avro-rest/avro-rest-js
> browserify ./client-side/main.js -o ./client-side/bundle.js --debug

$ npm --ignore-scripts=false run serve-client-side

> avro-rest-js@0.1.1 serve-client-side /Users/ronda/projects/rondinif/avro-rest-js
> cd client-side;  python -m SimpleHTTPServer 9090 ; cd ..

Serving HTTP on 0.0.0.0 port 9090 ...
```

### ...or start Client web-app with light-server
``` bash
$ npm --ignore-scripts=false run start-client-side

> avro-rest-js@0.1.1 start-client-side /Users/ronda/projects/rondinif/avro-rest-js
> npx light-server -s ./client-side -p 9090 -w 'client-side/**/*.js, client-side/**/*.html'

light-server is listening at http://0.0.0.0:9090
  serving static dir: ./client-side

light-server is watching these files: client-side/**/*.js, client-side/**/*.html
  when file changes,
  this event will be sent to browser: reload
```


## Connect the mongo client to perform sone queries 
### if you have `mongod` installed and want to use the local `mongo` client
```
$ mongo
MongoDB shell version: 3.0.3
connecting to: test
```
### if run `mongod in a container` and want to use the `mongo` client installed on the host
```
$ mongo docker_mongodb_1
MongoDB shell version v4.2.0
connecting to: mongodb://127.0.0.1:27017/docker_mongodb_1?compressors=disabled&gssapiServiceName=mongodb
```

### if run `mongod in a container` and want to use the `mongo` client from the container 
```
$ docker ps                               
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
a2315a01ae43        mongo:3.2           "docker-entrypoint.s…"   About an hour ago   Up 6 seconds        0.0.0.0:27017->27017/tcp   docker_mongodb_1

$ docker exec -it docker_mongodb_1 /bin/bash
```

### perform some queries
```
> show dbs
Tododb  0.078GB
> use Tododb
switched to db Tododb
> db.getCollectionNames()
[ "system.indexes", "tasks" ]
> db.tasks.find()
```
