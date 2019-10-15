const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req,res) => {
    try{
        const category = await Song.find().distinct('category')
        res.json(category);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:category', async (req,res) => {
    try{
    const category = await Song.find({category:req.params.category})
    res.json(category);
    }catch(err){
        res.json({message:err});
    }
});  

module.exports = router;