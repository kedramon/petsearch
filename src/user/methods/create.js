'use strict';

const User = require('../user.model');

// Create user.
module.exports = async function (req, res, next) {

  var user, userModel = new User();
  // Confirm that user typed same password twice.
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    return res.json("Passwords don't match");
  }

  if (req.body.email &&
    req.body.name &&
    req.body.password &&
    req.body.passwordConf) {

    try {
      user = await userModel.createUser(req.body);
    } catch (ex) {
      next(ex);
    }

    return res.send(user);
  } else {
    var err = new Error('All field is reuiqred');
    err.status = 400;
    next(err);
  }
}
