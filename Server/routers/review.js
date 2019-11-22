const express = require('express');
const router =  new express.Router();
const review = require('../models/review');
const mongoose = require('mongoose');
const auth = require('../middleware/auth')

//localhost:3000/rList
router.get('/rList',(req, res) => {
    review.find((err, data) => {
        if(!err) { res.send(data); }
        else { console.log('Error in retriving review'); }
    });
});

//localhost:3000/rlist/101
router.get('/rlist/:id', auth, async (req, res) => {
    try{
        const empReview = await review.findOne(req.params.id)
        if(empReview){ res.send(empReview) }
        else { console.log('Error in retriving review')}
    }catch(error){
        res.status(500).send()

    }
})

//localhost:3000/review
router.post('/review',async (req, res) => {
    console.log('in post');
    const review1 = new review(req.body)
    try{
        await review1.save();
         res.send(review1)
    }catch(error){
        res.status(500).send(error)

    }
});

localhost:3000/review1/101
router.delete('/review1/:review_id', async (req, res) => {
    try {
       const empReview = await review.findOneAndDelete(req.params.review_id)
        if (!empReview) {
            return res.status(404).send()
        }

        console.log("Delete review")
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
    

module.exports = router;