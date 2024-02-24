const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    NameBook: {
        type: String,
        required: true
    },
    NumberChapter: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Mark", Schema, "Mark");