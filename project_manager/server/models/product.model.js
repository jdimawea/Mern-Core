// import mongoose
const mongoose = require('mongoose')

// Creating a schema
const ProductManagerSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
    price : {
        type: Number, // Boolean, Array
        required: [true, "How much though?"],
        min: [0, "It can't be free"]
    },
    description : {
        type: String, 
        required: [true, "Description is required"],
        minLength: [5, "Description must be at least 5 characters long"]
    },
}, {timestamps : true}) // createdAt, updatedAt

// to export the schema under Product
module.exports.Product = mongoose.model('Product', ProductManagerSchema)