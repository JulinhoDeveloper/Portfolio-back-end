const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
    experiencia:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('experiencia', experienciaSchema);