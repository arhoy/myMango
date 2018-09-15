
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");