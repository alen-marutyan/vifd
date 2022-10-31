const express = require('express');
const path = require('path');
const logger = require('morgan');
const http = require("http");

const indexRouter = require('./routes/index');

const app = express();
const server = http.createServer(app)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', indexRouter);

server.listen(5050, ()=>{
    console.log('Start server http://localhost:5050/')
});
