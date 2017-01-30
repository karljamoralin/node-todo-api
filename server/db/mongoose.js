var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dbuser:dbpassword@ds137729.mlab.com:37729/node-todo-db');

module.exports = {mongoose};
