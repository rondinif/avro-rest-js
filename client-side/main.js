"use strict";

var avro = require('avsc');

var avroTaskSchema = {
  name: 'TaskType',
  type: 'record',
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'createdDate',
      type: 'string'
    }
  ]
};

// TODO share avroTaskResponseSchema with serverside API todoListController.js 
var avroTaskResponseSchema = {
  name: 'TaskType',
  type: 'record',
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
        name: 'status',
        type: {
        name: 'EnumField',
        type: 'enum',
        symbols: ['pending', 'ongoing', 'completed']
        }
    }    
    ]
};

var typeTask = avro.parse(avroTaskSchema);
var typeTaskResponse = avro.parse(avroTaskResponseSchema);

var ts = new Date().toISOString();
console.log("ts:");
console.log(ts);

// Create message and encode to Avro buffer
var messageBuffer = typeTask.toBuffer({
  name: "task #1",
  createdDate: ts
});

console.log("messageBuffer:");
console.log(messageBuffer);


var axios = require('axios');
var config = {
    headers: {'X-My-Custom-Header': 'Header-Value'}
};
axios.post('http://localhost:3000/avrotasks', { messageBuffer: messageBuffer }, config).then(function(response){
    console.log(response.status);
    if (response.status === 200) {
        // see https://blog.mimacom.com/blog/2017/04/07/apache-kafka-with-node-js/
        const buf = new Buffer(response.data.messageBuffer, 'binary'); // Read string into a buffer.
        const taskResponse = typeTaskResponse.fromBuffer(buf.slice(0)); // Skip prefix.
        console.log(taskResponse);
        document.getElementById('response').innerHTML = "OK: task name:" + taskResponse.name + " status:" + taskResponse.status;
    }
    else {
        // throw error and go to catch block
        throw new Error("Error");
    }
    console.log('saved successfully')
  }).catch(error => {
    //when throw "Error" is executed it runs the catch block code
    console.log(error)
});;  

document.getElementById('response').innerHTML =  messageBuffer; // squares; //