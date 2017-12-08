const User = require('../user.model');

// Get users.
module.exports = async function (req, res, next) {
  var users, userModel = new User();

  try {
    users = await userModel.usersList();
  } catch (ex) {
    console.log(ex);
  }

  return res.send(users);
  User.find(function (err, users) {
    if (err) {
      throw err;
    }
    return res.json(users);
  });

};
