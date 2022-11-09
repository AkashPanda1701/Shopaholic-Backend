const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    imageUrl : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    stars :{
        type : Number,
        required : true
    },
    numReviews : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    }

}, {
    versionKey: false,
}
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;