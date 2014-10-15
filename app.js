var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./routes/users');
var app = express();

var dbName = "userDB";
var connectionString = 'mongodb://localhost:27017/' + dbName;
 
mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', users); //This is our route middleware
 
module.exports = app;