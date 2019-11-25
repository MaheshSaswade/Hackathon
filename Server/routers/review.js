const express = require('express');
const router =  new express.Router();
const review = require('../models/review');
const mongoose = require('mongoose');
const auth = require('../middleware/auth')
const cors = require('cors')

//localhost:3000/rList
router.get('/rList',(req, res) => {
    review.find((err, data) => {
        if(!err) { res.send(data); }
        else { console.log('Error in retriving review'); }
    });
});

//localhost:3000/rlist/101
router.get('/rlist/:review_id', auth, async (req, res) => {
    try{
        const empReview = await review.findOne(req.params.review_id)
        if(empReview){ res.send(empReview) }
        else { console.log('Error in retriving review')}
    }catch(error){
        res.status(500).send()

    }
})

//localhost:3000/review
router.post('/review',cors(), auth, async (req, res) => {
    console.log('in post');
    const review1 = new review(req.body)
    try{
        await review1.save();
         res.send(review1)
    }catch(error){
        res.status(500).send(error)

    }
});

//localhost:3000/review1/101
router.delete('/review1/:review_id', async (req, res) => {
    try {
       const empReview = await review.findOneAndDelete({review_id:req.params.review_id})
        if (!empReview) {
            return res.status(404).send()
        }

        console.log("Deleted review")
        res.send(empReview)
    } catch (e) {
        res.status(500).send()
    }
})

// router.delete('/users/:review_id', async (req, res) => {
//         try {
//             const user = await review.findOneAndDelete(req.params.review_id)
    
//             if (!user) {
//                 return res.status(404).send()
//             }
    
//             res.send(user)
//         } catch (e) {
//             res.status(500).send()
//         }
//     })
    
//localhost:3000/reviewUpdate/101
router.patch('/reviewUpdate/', cors(), async (req, res) => 
{
    const review_id = req.body.review_id
    const update_object = {'review_type': req.body.review_type, 'skills': req.body.skills , 'reviewer': req.body.reviewer, 'deadline_date': req.body.deadline_date }
    const updates = Object.keys(update_object)
    const allowedUpdates = ['review_type', 'skills', 'reviewer', 'deadline_date']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
    }
    try
    {
            const reviewUpdate = await review.findOneAndUpdate({review_id: review_id}, update_object, { new: true, runValidators: true })
            if (!reviewUpdate) {
                    return res.status(404).send()
            }
            res.send(reviewUpdate)
    } catch (e) {
            res.status(400).send(e)
    }
})


module.exports = router;