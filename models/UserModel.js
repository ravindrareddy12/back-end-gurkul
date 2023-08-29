const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove whitespace from the beginning and end
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true
  },
  howDidYouHear: [{
    type: String,
    enum: ['LinkedIn', 'Friends', 'Job Portal', 'Others']
  }],
  city: {
    type: String,
    enum: ['Mumbai', 'Pune', 'Ahmedabad'],
    required: true
  },
  state: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
