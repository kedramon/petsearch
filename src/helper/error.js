'use strict';

module.exports = function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const body = {
    message: err.message,
    code: err.code
  };

  if (status > 499) {
    console.error(err);
  }

  res.status(status).send(body);
}
