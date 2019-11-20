const express = require('express')
const employee = require('../models/employee')
const router = new express.Router()

    router.post('/emp', async (req, res) => {
        const emp = new employee(req.body)
        try {
                await emp.save()
                const token = await emp.generateAuthToken()
                res.status(201).send({emp , token})
        } catch (e) {
                res.status(400).send(e)
        }
    })

    router.get('/emp', async (req, res) => {
        try {
                const emp = await employee.find({})
                res.send(emp)
        } catch (e) {
                res.status(500).send()
        }
    })

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

module.exports = router









