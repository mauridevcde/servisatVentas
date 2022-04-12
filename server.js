const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./database/connection');
const http = require('http');
const fs = require('fs').promises;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//mongoDB connection
connectDB();

var corsOptions = {

  //origin: ['http://localhost:8080'],
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ['GET', 'PUT', 'DELETE', ' POST', 'DISPATCH'],
 }

app.use(cors(corsOptions));


app.use('/', require('./routes/routes'));

app.use('/', express.static(__dirname + '/'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/database', express.static(__dirname + '/database'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/model', express.static(__dirname + '/model'));
app.use('/others', express.static(__dirname + '/others'));
app.use('/routes', express.static(__dirname + '/routes'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(7040, function () {
  console.log('Node server is running..');
});

app.listen(8080, () => {
  console.log('API REST running in port 8080!')
})