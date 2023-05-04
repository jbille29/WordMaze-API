const mongoose = require('mongoose')

const gameOneSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    grid: [[{
        type: String,
        required: true
    }]],
    coordinates: [[{
        type: Number,
        required: true
    }]],
    date: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('GameOne', gameOneSchema)