// import schema from model
const {Product} = require('./../models/product.model')

// test message from backend to frontend
module.exports.message = (req, res) => {
    res.json({message: "message from backend to frontend"})
}

// get all
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products)) // successfull response
        .catch(err => res.json(err)) // unsuccesfful response
}

// get one
module.exports.oneProduct = (req, res) => {
    const id = req.params.id // naming of the params depends on the routes
    Product.findOne({ _id: id }) // _id (from mongoDB) id (from params id)
        .then(product => res.json(product)) // successfull response
        .catch(err => res.json(err)) // unsuccesfful response
}

// create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(response => res.json(response)) // successfull response
        .catch(err => res.json(err)) // unsuccesfful response
}

// update = getOne + create
module.exports.updateProduct = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        { _id: id }, // filter out the product with the id
        req.body, // the data to be updated
        { new: true, runValidators: true } // options
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}