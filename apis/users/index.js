'use strict';
const express = require('express');
const controller = require('./users.controller');

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/:id', controller.getSingle);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;