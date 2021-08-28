const mongoose = require('mongoose');

const educacaoSchema = new mongoose.Schema({
    educacao:{
        type:String,
        required: true
    },
})

module.exports = mongoose.model('educacao', educacaoSchema);