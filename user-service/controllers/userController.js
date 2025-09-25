const User = require('../models/userModel');

// Create a new user
exports.createUser =async(req,res)=>{

    try{
       const {name,email}=req.body;

       if(!name || !email){
        return res.status(400).json({message:'Name and email are required'});
       }

       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({message:'User with this email already exists'});
       }

       const newUser =new User({name,email});
       await newUser.save();
       res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({message:'Internal Server error',error:err.message});
    }
}

exports.getALLusers=async(req,res)=>{
    try{
        const users =await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message:'Internal Server error',error:err.message});
    }
}