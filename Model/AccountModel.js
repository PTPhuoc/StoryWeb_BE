const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Image: {
        type: String,
        required: true,
        default: "User.png"
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        default: "User"
    },
    DateCreate: {
        type: String
    }
})

module.exports = mongoose.model("Account", Schema, "Account");