const mongoose = require('mongoose');

const sobreSchema = new mongoose.Schema({
    sobre:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('sobre', sobreSchema);