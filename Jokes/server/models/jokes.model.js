const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        // Validation
        required: [true, "Setup is required"],
        minlength: [5, "Too Short! Must be at least 5 characters long"]
    },
    punchline: {
        type: String,
        // Validation
        required: [true, "Punchline is required"],
        minlength: [5, "Too Short! Must be at least 5 characters long"]
    }
}, { timestamp: true }) // means when it was created at, updated at

// to export to the controller, can export more things
module.exports.Joke = mongoose.model('Joke', JokeSchema)