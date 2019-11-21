const mongoose = require('mongoose')
const validator=require('validator')
//const dateOnly =require('mongoose-dateonly')(mongoose)
const empSchema = new mongoose.Schema({
    empID:{
        type: Number,
        required: true,
        trim: true,
        unique: true    
    },
    empName:{
        type: String,
        required: true,
        trim: true
    },
    empDesignation:{
        type: String,
        required: true,
        trim: true
    },
    empDepartment:{
        type: String,
        required: true,
        trim: true
    },
    empDOB:{
        type: Date,
        required: true,
        trim: true        
    },
    empDOJ:{
        type: Date,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    mobileNo:{
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if (value.toString().length > 10) {
                throw new Error('Mobile number is 10 digit')
            }
            else if(value.toString().length <10) {
                throw new Error('Mobile number is 10 digit')
            }
        }    
    },
    gender:{
        type: String,
        required: true,
        trim: true
    },
    managerID:{
        type: Number,
        required: true,
        trim: true    
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    token:{
            type: String,
    }
})

empSchema.methods.generateAuthToken = async function () {
    const emp = this
    const token = jwt.sign({ _id: emp._id.toString() }, 'WeAreMiracalWorkers!')
    emp.token = token
    await emp.save()
    return token
}

const Employee = mongoose.model('Employee', empSchema)
module.exports = Employee


