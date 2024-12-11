import express from "express";
import {User} from '../model/userLogin.js';

const router = express.Router();

// GET
router.get('/',async (req,res)=>{
  try{
    const users = await User.find();
    res.status(200).json(users);
  }
  catch(err){
    res.status(500).json({message:err.message});
  }
});


// POST
router.post('/',async (req,res)=>{
  const {username} = req.body;
  try{
    const usernameExist = await User.findOne({username});
    if(usernameExist){
      return res.status(400).json({message:"Username already exists"});
    }

    if(
      !req.body.username || !req.body.password
    ){
      return res.status(400).json({message:"All fields are required"});
    }

    const NewUser = {
      username: req.body.username,
      password: req.body.password
    }

    const user = await User.create(NewUser);
    res.status(201).send(user);
  }
  catch(err){
    console.log({message:err.message});
  }
})

// DELETE
router.delete('/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(req.params.id);
    if(user){
      res.status(200).json(user);
    }else {
      res.status(404).json({message:"User id not found"});
    }
   
  }
  catch(err){
    res.status(500).json({message:err.message});
  }
})

export default router