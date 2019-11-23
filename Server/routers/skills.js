const express = require('express')
const Skills = require('../models/skills')
// const cors = require('cors')
const router = new express.Router()

// Create new skill

router.post('/skills',async (req,res) => {
    const skills = new Skills(req.body)
    try { 
        await skills.save()
        
        res.send(skills)
    } catch (error) {
        res.status(400).send(error)
    }
})

// View all skills

router.get('/skills', async (req,res) => {
    try {
        const skills = await Skills.find({});
        console.log("skills:",skills);
        res.send(skills);
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete skill

router.delete('/skills', async (req, res) => {
    try {
        const skills = await Skills.findOneAndDelete(req.body.skill)
        
        if (!skills) {
            return res.status(404).send('Skill not found!')
        }

        res.send(skills)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router