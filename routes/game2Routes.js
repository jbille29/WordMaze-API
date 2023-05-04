const express = require('express');
const router = express.Router();
const game2Controller = require('../controllers/game2Controller');

// Get all game1 results
router.get('/', game2Controller.getNewGame);


module.exports = router;
