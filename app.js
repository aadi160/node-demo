"use strict";

var express = require('express');
var mongoose = require('mongoose');
var config = require('./lib/config');
var util = require('util');
var  db = require('./lib/mongoose');
var routes = require('./routes');
var bodyParser = require('body-parser');

var app = express();

app.set('json spaces', 2);
app.set('port', config.port || 3000);
// db.constructor
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));
app.use(bodyParser.json({limit: '100mb'}));
// mongoose.connect(config.mongo_uri);
// app.use(bodyParser());
// app.use(express.static(__dirname + '/public'));
app.use('/', routes);
app.listen(app.get('port'), function(){
  util.log('adda52live server listening on port ' + app.get('port'));
});