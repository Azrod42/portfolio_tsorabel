const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");
const {number} = require("yup");
require('dotenv').config();


const userSchema = new mongoose.Schema({
    family_name: {type: String, required: false},
    given_name: {type: String, required: false},
    email: {type: String, required: true, unique: true},
    email_verified: {type: Boolean, required: false},
    picture: {type: String, required: false},
    locale: {type: String, required: false},
    displayName: {type: String, required: false},
    secrets: {type: [{openai: String, keySet: Boolean}], required: false},
});

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema);