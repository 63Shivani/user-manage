const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile : {
        type : String,
        required: true
    },
    address1 : {
        type : String,
        required: true
    },
    address2 : {
        type : String,
        
    },
    state : {
        type : String,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    country : {
        type : String,
        required: true
    },
    zipcode : {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;