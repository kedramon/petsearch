'use strict';

const express = require('express');

const apiRouter = express.Router();
const router = express.Router();

apiRouter.use('/api', router);
router.use('/user', require('./user'));

router.use(require('./helper/error.js'));

module.exports = apiRouter;
