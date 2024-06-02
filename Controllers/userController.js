const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
// const config = require('../config');

// Signup Controller
exports.signup = async (req, res) => {
    try {
      const { name, email, phone, gender, howDidYouHear, city, state, password } = req.body;
  
      // Check if user with the same email exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists' });
      }
  
      const newUser = new User({
        name,
        email,
        password
      });
  
      await newUser.save();
  
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

// Login Controller
module.exports.login = async (req,res)=>{
    try{
    const existingEmail = await User.findOne({email:req.body.email})
    if(!existingEmail){
        return res.status(401).send("error finding user")
    }
    if(existingEmail.password!==req.body.password){
        return res.redirect('/signin')
        
    }
   
    return res.json({ existingEmail})
    
  }catch(err){
    return res.status(500).send("internal server error")
  }
}

