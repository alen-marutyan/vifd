const express = require('express');
const path = require('path');
const logger = require('morgan');
const http = require("http");
const cors = require('cors')

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000
const server = http.createServer(app);
const corsOption = {
    origin: ["https://developer.riotgames.com"],
};

app.use(cors(corsOption))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', indexRouter);

server.listen(PORT)
