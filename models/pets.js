var mongoose = require('mongoose');

// Pets Schema.
var petsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
});

var Pets = module.exports = mongoose.model('Pets', petsSchema);

// Get pets.
module.exports.getPets = function(callback, limit) {
    Pets.find(callback).limit(limit);
}

// Get pet by id.
module.exports.getPetById = function(id, callback) {
    Pets.findById(id, callback);
}

// Add pet.
module.exports.addPet = function(pet, callback) {
    Pets.create(pet, callback);
}
