let mongoose = require("mongoose")

// Library Schema
let bookSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    }
});

// Library model 
const BookModel = mongoose.model("library",bookSchema)

// exporting module
module.exports = BookModel

