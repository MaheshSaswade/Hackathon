const express = require('express')
const Employee = require('../models/emp')
// const cors = require('cors')
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

router.delete('/emp/:id', async (req, res) => {
    try {
        const emp = await employee.findByIdAndDelete(req.params.id)

        if (!emp) {
            return res.status(404).send()
        }

        res.send(emp)
    } catch (e) {
        res.status(500).send()
    }
})


router.post('/employee',async (req,res) => {
    const employee = new Employee(req.body)
    try { 
        await employee.save()
        // const token = await user.generateAuthToken()
        // console.log("Hiii Mahesh",token)
        res.send(employee)
    } catch (error) {
        res.status(400).send(error)
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



// Login with email & pwd
// router.post('/users/login', async(req, res) => {
//     try{
        
//         const user = await User.findByCred(req.body.email, req.body.password)
//         const token = await user.genAuthToken()
//         console.log('I m here')
//         res.send({ "message": 'Logged in!', user, token })
//         }catch (e) {
//         res.status(400).send({})
//         }
// })

// Logout
// router.post('/users/logout', async(req, res) => {
//     try{
//         req.user.token = "Logged out!"
//         const the = await req.user.save()
//         res.send(req.user)

//     }catch (e) {
//         res.status(500).send()
//     }
// })

// Get profile

router.get('/users/me', async (req, res) => {
    res.send(req.user)
})

module.exports = router



