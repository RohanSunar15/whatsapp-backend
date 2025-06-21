const mongoose = require('mongoose');
const db = require('../config/db');


const {Schema} = mongoose;

const UserSchema = new Schema({

    name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  profileImage: {
    type: String,
    default: ''
  }
}, { timestamps: true 
});

const userModel = db.model('User', UserSchema);

module.exports = userModel;
