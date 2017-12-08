'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect(config.mongo_url, {useMongoClient: true})
var db = mongoose.connection;
mongoose.Promise = require('bluebird');

// Initialize swagger-jsdoc.
var swaggerSpec = swaggerJSDoc(config.swagger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve swagger.
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Use sessions for tracking logins.
app.use(session({
  secret: config.passport.secret,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
app.use(passport.initialize())
app.use(passport.session())


app.get('/', function(req, res) {
  res.send('Please wisit /api-docs ');
});

app.use(require('./src/routes.js'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
/*
app.get('/api/pets', function(req, res) {
  Pets.getPets(function(err, pets) {
    if (err) {
      throw err;
    }
    res.json(pets);
  });
});

app.post('/api/pets', function(req, res) {
  var pet = req.body;
  Pets.addPet(pet, function(err, pets) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json(pets);
  });
});

app.get('/api/pets/:id', function(req, res) {
  Pets.getPetById(req.params._id, function(err, pet) {
    if (err) {
      throw err;
    }
    res.json(pet);
  });
});
*/

app.listen(3000);
