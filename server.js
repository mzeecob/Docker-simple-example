// server.js
// load the things we need
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var path = require('path');
var index = require('./app/index')
// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// render
app.use(index);



var port = 5002;
const HOST = '0.0.0.0';

app.listen(port, HOST);
console.log('Runing on port ' + port);
