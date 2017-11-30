var mongoose = require('mongoose');

// Users Schema.
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

var Users = module.exports = mongoose.model('Users', userSchema);

// Get users.
module.exports.getUsers = function(callback, limit) {
    Users.find(callback).limit(limit);
}
