const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.post('/:songId', async (req,res) => {
    try{
        const category = await Song.findByIdAndUpdate({"_id":req.params.songId},{$inc:{liked:+1}})
        res.json(category);
    }catch(err){
        res.json({message:err});
    }
}); 

router.delete('/:songId', async (req,res) => {
    try{
        const category = await Song.findByIdAndUpdate({"_id":req.params.songId},{$inc:{liked:-1}})
        res.json(category);
    }catch(err){
        res.json({message:err});
    }
}); 

module.exports = router;