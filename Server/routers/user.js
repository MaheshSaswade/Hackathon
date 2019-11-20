const express = require('express')
const User = require('../models/user')
const cors = require('cors')
const router = new express.Router()

// Login with email & pwd

router.post('/users/login', cors(), async(req, res) => {
    try{
        
        const user = await User.findByCred(req.body.email, req.body.password)
        const token = await user.genAuthToken()
        console.log('I m here')
        res.send({ "message": 'Logged in!', user, token })
        }catch (e) {
        res.status(400).send({})
        }
})


// Logout

router.post('/users/logout', auth, async(req, res) => {
    try{
        req.user.token = "Logged out!"
        const the = await req.user.save()
        res.send(req.user)

    }catch (e) {
        res.status(500).send()
    }
})

// Get profile

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})
