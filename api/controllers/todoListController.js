'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
  
const avro = require('avsc');
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



const typeTask = avro.Type.forSchema(avroTaskSchema);
const typeResponseTask = avro.Type.forSchema(avroTaskResponseSchema)

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_avrotasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_task = function(req, res) {
  console.log("req.body:")
  console.log(req.body);
  var new_task = new Task(req.body);

  console.log("new_task:")
  console.log(new_task);

  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_avro_task = function(req, res) {
  console.log("req.body:")
  console.log(req.body);

  const value = req.body.messageBuffer.data
  console.log("value:")
  console.log(value)

  var buf = new Buffer(value, 'binary'); // Read string into a buffer.
  var decodedMessage = typeTask.fromBuffer(buf.slice(0)); // Skip prefix.
  console.log(decodedMessage);
  
  var new_task = new Task(decodedMessage);

  console.log("new_task:")
  console.log(new_task);

  new_task.save(function(err, task) {
    if (err) {
      res.send(err);
    }
    console.log(task);
    /*
    const typeResponse = avro.Type.forValue({
      name: task.name,
      status: task.status,
    });
    // <RecordType {"fields":[{"name":"name","type":"string"},{"name":"status","type":{"type":"array","items":"string"}}]}>
    */

    console.log(typeResponseTask);
    const messageBuffer = typeResponseTask.toBuffer({
      name: task.name,
      status: task.status,
    });
    res.json({ messageBuffer: messageBuffer })
    // res.json(task);
  });

};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
// Task.remove({}).exec(function(){});
exports.delete_a_task = function(req, res) {

  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
