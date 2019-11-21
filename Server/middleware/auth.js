const jwt = require('jsonwebtoken')
const Employee = require('../models/emp')

const auth = async (req,res,next) => {
    try {
            // console.log("authorization",req.header('Authorization'));
            const token = req.header('Authorization').replace('Bearer ','');
            const decoded = jwt.verify(token,'thisismytoken');
            // console.log("decode",decoded)
            const emp = await Employee.findOne({_id: decoded._id, 'token': token})
            if(!emp) {
                throw new Error()
            }
            req.token = token
            req.emp = emp
            next()
        } catch (error) {
        res.status(401).send({error : "Please Authenticate"})
    }
}

module.exports = auth