const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: String, 
        required: true},

    description: {
        type: String, 
        required: true,
       },

    tag: {
        type: String, 
       },
    
    timestamp: {
        type: Date,
        default: Date.now
    }

  });

  modeule.exports =  mongoose.model('note', NotesSchema);