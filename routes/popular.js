const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req,res) => {
    try{
        const category = await Song.find().sort({liked:-1}).limit(1)
        res.json(category);
    }catch(err){
        res.json({message:err});
    }
}); 

module.exports = router;