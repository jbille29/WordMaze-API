const Game1 = require('../models/Game1')
const moment = require('moment');

// Get all game1 results
const getNewGame = async(req, res) => {
   // Get the current date and time
   const now = moment();
  
   // Find the next puzzle with a date greater than or equal to the current date
   Game1.findOne({ date: { $gte: now.startOf('day').toDate() } })
       .sort({ date: 1 })
       .then((puzzle) => {
           if (!puzzle) {
           res.status(404).send('No puzzles found');
           } else {
           res.send(puzzle);
           }
       })
       .catch((err) => {
           console.error(err);
           res.status(500).send('Internal server error');
   });
}

module.exports = { getNewGame }

