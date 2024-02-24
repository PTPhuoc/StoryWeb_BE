const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Name: {
        type: String,
        required : true
    },
    Number_Chapter: {
        type: Number
    },
    Name_Chapter: {
        type: String
    },
    Content: {
        type: String
    }
})

module.exports = mongoose.model("StoryModel", Schema, "Story")
