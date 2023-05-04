const express = require('express');
const router = express.Router();
const game1Controller = require('../controllers/game1Controller');

// Get all game1 results
router.get('/', game1Controller.getNewGame);


module.exports = router;
