const mongoose = require('mongoose')
const validator = require('validator')

const Skills = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    skill_type: {
        type: String,
        required: true
    },
    skill :{
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No remarks',
        required: true
    },
    max_rating : {
        type: Number,
        required: true
    }
})

const Skills = mongoose.model('Skills', ReviewSchema)

module.exports = Skills