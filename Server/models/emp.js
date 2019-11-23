const mongoose = require('mongoose')
const validator=require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
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
        type: String,
        required: true,
        trim: true        
    },
    empDOJ:{
        type: String,
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
    this.token = jwt.sign({ _id: this._id.toString() }, 'WeAreMiracalWorkers!')
    console.log("Auth token generated...........")
    await this.save()
    console.log("welcome",this.token)
    return this.token
}

empSchema.statics.findByCred = async function (email, password)  {
    console.log("Inside find by")
    const emp = await Employee.findOne({ email })
    console.log(emp)
    if(!emp) {
        throw new Error("Unable to login");
    }
    console.log("passwords: ", password, emp.password)
    const isMatch = await bcrypt.compare(password, emp.password)
    if(!isMatch) {
        throw new Error("Password is wrong");
    }
    return emp;
}

// Hash the plain text password is saving
empSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    console.log("end of middle ware")
    next()
})

const Employee = mongoose.model('Employee', empSchema)

module.exports = Employee


