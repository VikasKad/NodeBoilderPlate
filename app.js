var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config()

var app = express();
//routing

require('./routes')(app);

mongoose.connect(process.env.DB_HOST + process.env.DB_NAME, {
    useNewUrlParser: true
});
// express config
require('./config/express')(app);


module.exports = app;