const mongoose = require('mongoose')
const validator=require('validator')

const ReviewSchema = new mongoose.Schema({
    review_id: {
        type: Number,
    },
    review_type: {
        type: String,
        required: true
    },
    skills :{
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
    },
    recommendation : {
        type: String,
    },
    create_date : {
        type: String,
        required: true
    },
    deadline_date : {
        type: String,
        required: true
    },
    reviewer : {
        type: Array
    }
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review


