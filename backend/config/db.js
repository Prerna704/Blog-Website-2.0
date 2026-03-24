const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://prernaprem720_db_user:6xkV5ydgemn0bsUd@cluster0.ohqsubs.mongodb.net/blogDB");
  console.log("MongoDB Connected");
};//6xkV5ydgemn0bsUd

module.exports = connectDB;
