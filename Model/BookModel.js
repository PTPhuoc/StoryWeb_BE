const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Author: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Chapter: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Describe: {
        type: String,
        default: ""
    },
    Views: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("BookModel", Schema, "Book");