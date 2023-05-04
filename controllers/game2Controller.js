const Game2 = require('../models/Game2');

// Get all game1 results
exports.getNewGame = async (req, res) => {
  try {
    res.send('new game 2')
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
