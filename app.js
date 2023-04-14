const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
const userRoutes = require('./routes/userRoutes');
const mongoUrl =process.env.MONGO_URI;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/users", userRoutes);
app.listen(5001, (req, res) => {
  console.log("Server listening on : 5001");
});
