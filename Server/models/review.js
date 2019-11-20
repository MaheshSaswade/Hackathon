const mongoose = require('mongoose')
const validator=require('validator')

const ReviewSchema = new mongoose.Schema({
    review_id: {
        type: Number,
        required: true
    },
    review_type: {
        type: String,
        required: true
    },
    parameters :{
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    recommendation : {
        type: String,
        required: true
    },
    create_date : {
        type: Date,
        required: true
    },
    deadline_date : {
        type: Date,
        required: true
    },
    reviewer : {
        type: Array
    }
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review