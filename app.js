const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Users = require('./models/users');
Pets = require('./models/pets');

mongoose.connect('mongodb://localhost/petstore')
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Please use /api/pets or ');
});

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

app.listen(3000);
