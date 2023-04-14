const mongoose = require("mongoose");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
    console.log(req.body);
   
    //Checking if the user already exists
    const emailExists = await userModel.findOne({ Email: req.body.Email });
    if (emailExists) return res.status(400).send({ msg: "Email Already exists" });
  
    
    const newUser = {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
    };
    try {
      const newEntry = new userModel(newUser);
      await newEntry.save();
      res.send({ msg: "User Registered", info: newEntry });
    } catch (err) {
      throw err;
    }
  };
const getAllUsers=async(req,res)=>{
    try {
        const results = await userModel.find();
        res.send({ msg: "Showing all users", data: results });
      } catch (err) {
        throw err;
      }
}
  
module.exports={
    registerUser,
    getAllUsers
}