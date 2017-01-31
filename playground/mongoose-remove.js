const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5890cfbc3cf8738ab8317824'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5890cfbc3cf8738ab8317824').then((todo) => {
  console.log(todo);
});
