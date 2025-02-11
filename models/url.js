const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    // If you want to store the timestamp of each visit, it's fine to keep it as an array of objects
    // with just the timestamp field.
    visitHistory: [{ 
        timestamp: { 
            type: Number 
        } 
    }],
    createdBy:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'users'
    },
}, { timestamps: true });

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
