const express = require('express');
const router = express.Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     required:
 *       - name
 *       - email
 *       - password
 *       - passwordConf
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       passwordConf:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     tags: [Users]
 *     description: Create user
 *     produces:
 *       - "application/json"
 *     operationId: "create"
 *     consumes:
 *       - "application/json"
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "User object that needs to be added to the store"
 *         required: true
 *         schema:
 *            $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: User object
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 *   get:
 *     tags:
 *       - User
 *     description: Get users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of Users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post('/', require('./methods/create'));

router.get('/', require('./methods/get'));

module.exports = router;
