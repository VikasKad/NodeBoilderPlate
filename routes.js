/**
 *  application routes main file
 */

'use strict';
var bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = function (app) {

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use('/api/user', require('./apis/users'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|app|assets)/*')
    .get(function (req, res) {
      res.send({
        message: 'Are you sure about this API?'
      });
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.send({
        message: 'you are successfully connected'
      });
    });
};