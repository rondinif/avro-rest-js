# avro-rest-js
simple lab applying [avsc](https://github.com/mtth/avsc) and learn by doing:

1. how to create a trivial nodejs express REST API server that receive and send avro buffer in request/response
2. how to call REST API that send and receive avro buffer client side javascript


## Install
### clone the project
``` bash
git clone https://github.com/rondinif/avro-rest-js.git
```
### install dependencies and dev-dependencies
``` bash
npm install
```

## Run and Degug

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