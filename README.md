# avro-rest-js
simple lab applying [avsc](https://github.com/mtth/avsc) and learn by doing:

1. how to create a trivial nodejs express REST API server that receive and send avro buffer in request/response
2. how to call REST API that send and receive avro buffer client side javascript

Qualitative: [![Quality Gate](https://sonarqube.com/api/badges/gate?key=avro-rest-js)](https://sonarqube.com/dashboard/index/avro-rest-js) 

Quantitative: [![Number of physical lines (number of carriage returns)](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=lines)](https://sonarcloud.io/component_measures?id=avro-rest-js&metric=lines&view=list) [![Number of physical lines that contain at least one character which is neither a whitespace nor a tabulation nor part of a comment.](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=ncloc)](https://sonarcloud.io/component_measures?id=avro-rest-js&metric=ncloc&view=list) [![Number of statements.](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=statements)](https://sonarcloud.io/component_measures?id=avro-rest-js&metric=statements&view=list) [![Number of functions. Depending on the language, a function is either a function or a method or a paragraph.](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=functions)](https://sonarcloud.io/component_measures?id=avro-rest-js&metric=functions&view=list)

<!-- Maintainability-->
Maintainability: [![Technical debt ratio](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=sqale_debt_ratio)](https://sonarcloud.io/component_measures/metric/sqale_debt_ratio/list?id=avro-rest-js) [![Rating given to your project related to the value of your Technical Debt Ratio](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=sqale_rating)](https://sonarcloud.io/component_measures/metric/sqale_rating/list?id=avro-rest-js) 

<!-- Reliability -->
Reliability: [![Bugs](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=bugs)](https://sonarcloud.io/component_measures/metric/bugs/list?id=avro-rest-js) [![Bugs](https://sonarcloud.io/api/badges/measure?key=avro-rest-js&metric=reliability_rating)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=avro-rest-js) 

<!-- Security -->
Security: [![Number of vulnerabilities](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/vulnerabilities/list?id=avro-rest-js) [![Security Rating](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=security_rating)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=avro-rest-js) 

<!-- Documentation -->
Documentation: [![Number of lines containing either comment or commented-out code](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=comment_lines)](https://sonarcloud.io/component_measures/metric/comment_lines/list?id=avro-rest-js) 

<!-- Complexity -->
Complexity: [![It is the complexity calculated based on the number of paths through the code](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=complexity)](https://sonarcloud.io/component_measures/metric/complexity/list?id=avro-rest-js) [![How hard it is to understand the code's control flow](https://sonarqube.com/api/badges/measure?key=avro-rest-js&metric=cognitive_complexity)](https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=avro-rest-js) 

<!-- Licence  -->
Licence: [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

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