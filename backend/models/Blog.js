const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  author: String,
  category: String,
  likes: { type: [String], default: [] }, // Array of user IDs who liked the blog
  comments: {
    type: [{
      user: String,
      text: String,
      createdAt: { type: Date, default: Date.now }
    }],
    default: []
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", blogSchema);
