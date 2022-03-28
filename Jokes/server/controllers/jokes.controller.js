// Deconstruct option 2
const { Joke } = require("./../models/jokes.model")

//-------------- They are functions! ---------------
// The logic of the operation
// get all
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes)) // successfull response
        .catch(err => res.json(err)) // unsuccessfull response
}

// get one 
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id }) // parameter to find by id
        .then(oneJoke => res.json({ joke: oneJoke })) // successfull response
        .catch(err => res.json({ message: 'Ooops', error: err })) // unsuccessfull response
}

// create  
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(response => res.json(response)) // successfull response
        .catch(err => res.json(err)) // unsuccessfull response
}

// update
module.exports.updateJoke = (req, res) => {
    const id = req.params.id
    Joke.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true } // triggers validations from the schema
    )
        .then(response => res.json(response)) // successfull response
        .catch(err => res.json(err)) // unsuccessfull response
}

// delete 
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(response => res.json(response)) // successfull response
        .catch(err => res.json(err)) // unsuccessfull response
}
