const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true       
    },
    description: {
        type: String,
        minLength: 2
    },
    price: {
        type: Number,
        min: 1
    },
    discountPercentage: {
        type: Number,
    },
    rating: {
        type: Number
    },
    stock: {
        type:Number
    },
    brand: {
        type: String,
        minLength: 2
    },
    category: {
        type: String
    },
    thumbnail: {
        type:String
    },
    images: {
        type: Array
    }

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product