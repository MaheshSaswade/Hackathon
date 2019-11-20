const express = require('express')
const employee = require('../models/emp')
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