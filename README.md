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

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

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
``` bash 
$ mongod --config  ${YOUR_MONGO_CONFIGURATION} 
$ mongo
MongoDB shell version: 3.0.3
connecting to: test
> show dbs
Tododb  0.078GB
> use Tododb
switched to db Tododb
> db.getCollectionNames()
[ "system.indexes", "tasks" ]
> db.tasks.find()
```

### Start Server side API

``` bash
$ npm run start
```
or:
``` bash 
$ DEBUG=api:* npm start
```

### Start Client web-app
``` bash
$ npm run build-client-side

> avro-rest-js@0.1.0 build-client-side /Users/ronda/projects/learning-avro/lab05-avro-rest/avro-rest-js
> browserify ./client-side/main.js -o ./client-side/bundle.js --debug

$ npm run start-client-side

> avro-rest-js@0.1.0 start-client-side /Users/ronda/projects/learning-avro/lab05-avro-rest/avro-rest-js
> ~/.npm-packages/bin/light-server -s . -p 9090 -w 'client-side/**/*.js, client-side/**/*.html'

light-server is listening at http://0.0.0.0:9090
  serving static dir: .

light-server is watching these files: client-side/**/*.js, client-side/**/*.html
  when file changes,
  this event will be sent to browser: rel
```


## Demo Video
[![AVRO REST API in javascript with AVSC](http://img.youtube.com/vi/DcijFhjJ0Ys/0.jpg)](http://www.youtube.com/watch?v=DcijFhjJ0Ys "AVRO REST API in javascript with AVSC")