require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./app/routes');
var mongoose = require('mongoose');
var app = express();

var dbUrl = '';
var dbConfig = {
    test: 'mongodb://localhost/prep-test',
    dev: 'mongodb://localhost/prep'
};

if (process.env.NODE_ENV == 'dev') {
    dbUrl = dbConfig.dev;
} else {
    dbUrl = dbConfig.test;
}

mongoose.connect(dbUrl);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.listen('8080', function() {
    console.log('app running on port 8080');
});

module.exports = app;
