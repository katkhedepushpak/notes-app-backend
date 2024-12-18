const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true},

    email: {
        type: String, 
        required: true,
        unique: true},

    password: {
        type: String, 
        required: true},
    
    timestamp: {
        type: Date,
        default: Date.now
    }

  });

  modeule.exports =  mongoose.model('user', UserSchema);