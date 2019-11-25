const express = require('express')
const Employee = require('../models/emp')
const cors = require('cors')
const auth = require('../middleware/auth')
const router = new express.Router()


router.patch('/emp/:id', async (req, res) => 
{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['empDesignation', 'empDepartment', 'mobileNo', 'managerID','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
    }
    try 
    {
            const emp = await employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            if (!emp) {
                    return res.status(404).send()
            }
            res.send(emp)
    } catch (e) {
            res.status(400).send(e)
    }
})


router.get('/employee', async (req,res) => {
    try {
        const emps = await Employee.find({});
        console.log("emps",emps);
        res.send(emps);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/employee', async (req,res) => {
    const employee = new Employee(req.body)
    try {
        await employee.save()
        res.send(employee)
    } 
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/employee/:email',  async (req, res) => {
    try{
       
        console.log(req.params.email)
        const empDetails = await Employee.findOne({'email':req.params.email})
        if(empDetails){ res.send(empDetails) }
        else { console.log('Error in retriving review')}
    }catch(error){
        res.status(500).send()

    }
})



router.get('/employee/me' ,async (req, res) => {
    res.send(req.emp)
})

//Login with email & pwd

router.post('/employee/login', async(req, res) => {
    console.log("Welcome mahesh inside node js")
    try {    
        const emp = await Employee.findByCred(req.body.email, req.body.password)
        const token = await emp.generateAuthToken();
        console.log(req.header)
        res.status(200).send({ message: 'Logged in!', emp, token })
    } catch (error) {
        res.status(400).send({message : "Your email or password is wrong",error})
    }
})

router.patch('/employee/me',auth ,async (req, res) => {
    const updates = Object.keys(req.body)
    // const allowedUpdates = ['empDesignation', 'empDepartment', 'mobileNo', 'managerID','password']
    const allowedUpdates = ['mobileNo','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation) {
        return res.status(400).send({error : "Invalid update.."})
    }
    try {
       updates.forEach((update) => req.emp[update] = req.body[update])
       await req.emp.save()
        if(!req.emp) {
            return res.status(404).send("User Not found") 
        }
        res.send(req.emp) 
    } catch (error) {
        res.status(400).send(error)
    }
})

// router.delete('/employee/me',auth,async (req,res) => {
//     try {
//         await req.emp.remove()
//         res.send(req.emp)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

router.delete('/emp/:email', async (req, res) => {
    try {
       const emp = await Employee.findOneAndDelete(req.params.email)
        if (!emp) {
            return res.status(404).send()
        }
        console.log("Delete employee")
        res.send(emp)
    } catch (e) {
        res.status(500).send()
    }
})

// Logout
router.post('/employee/logout' ,async(req, res) => {
    try{
        console.log("Inside logout")
        req.emp.token = "Logged out!"
        const the = await req.emp.save()
        res.send(req.emp)
    }catch (e) {
        res.status(500).send()
    }
})

module.exports = router