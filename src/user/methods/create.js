const User = require('../user.schema');

// Create user.
module.exports = function(req, res, next) {
  // Confirm that user typed same password twice.
  console.log(req.body);
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    return res.json("Passwords don't match");
    return next(err);
  }

  if (req.body.email &&
      req.body.name &&
      req.body.password &&
      req.body.passwordConf) {

    var user = req.body;
    User.create(user, function(error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.json(user);
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
}
