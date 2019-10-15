const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req,res) => {
    try{
        const songs = await Song.find();
        res.json(songs);
    }catch(err){
        res.send(err);
    }
});

router.get('/:songId', async (req,res) => {
    try{
        const song = await Song.findById({"_id":req.params.songId});
        res.json(song);
    }catch(err){
        res.send(err);
    }
})

router.post('/', async (req,res) => {
    const song = new Song({
        artist:req.body.artist,
        name: req.body.name,
        category:req.body.category,
        duration:req.body.duration,
        liked:req.body.liked
    });
    try{
    const savedSong = await song.save()
    res.json(savedSong);
    }catch(err){
        res.json({message:err});
    }
});

    router.delete('/:songId', async (req,res) => {
        try{
        const deletedSong = await Song.remove({_id: req.params.songId});
        res.json(deletedSong);
        }catch(err){
            res.json({message:err});
        } 
    });

    router.put('/:songId', async (req,res) => {
        try{
        const updatedSong = await Song.updateOne({_id: req.params.songId},
             {$set: {artist:req.body.artist,
                    name:req.body.name,
                    category:req.body.category,
                    duration:req.body.duration,
                    liked:req.body.liked}});
        res.json(updatedSong);
        }catch(err){
            res.json({message:err});
        } 
    });

module.exports = router;