const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    artist:{
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    liked:Number
});

module.exports = mongoose.model('Songs',SongSchema);