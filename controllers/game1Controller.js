const Game1 = require('../models/Game1')
const moment = require('moment');

// Get all game1 results
const getNewGame = async(req, res) => {
   // Get the current date and time  
    const now = moment();
    
    Game1.findOne({ 
        // get dates greater than or equal to now-24hrs AND less or equal to now
        date: { 
            $gte: moment().subtract(24, 'hours').toDate(),
            $lte: moment().toDate()   
        } 
    })
    // grabs latest date
    .sort({ date: -1 })
    .then((game) => {
        if (!game) {
            res.status(404).send('No games found');
        } else {
            res.send(game);
        }
    })
    
}

module.exports = { getNewGame }

