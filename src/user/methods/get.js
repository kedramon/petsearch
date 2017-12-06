const User = require('../user.schema');

// Get users.
module.exports = function(req, res, next) {
  User.find(function(err, users) {
    if (err) {
      throw err;
    }
    console.log(users);
    return res.json(users);
  });

};
