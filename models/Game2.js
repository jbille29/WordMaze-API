const mongoose = require('mongoose')

const gameTwoSchema = new mongoose.Schema({
    score: {
        type: Number,
        default: 0,
        required: true
    },
    gameOver: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('GameTwo', gameTwoSchema)