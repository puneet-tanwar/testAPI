
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    min: 3,
    max: 200
  },
  Email: {
    type: String,
    unique: true,
    required: true,
    min:6 
  },
  Password: {
    type: String,
    required: true,
    min: 8
  },


},{timestamps: true});

const userModel = mongoose.model("users", userSchema);
module.exports=userModel;