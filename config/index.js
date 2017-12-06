let config = {};

const shwagger = require('./components/shwagger');
const mongo = require('./components/mongo');
const passport = require('./components/passport');

config = Object.assign(
  config,
  shwagger,
  mongo,
  passport
);

module.exports = config;
