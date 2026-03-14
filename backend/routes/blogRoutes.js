const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// 🔹 GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// 🔹 GET single blog by ID  (⭐ MUST BE ABOVE myblogs)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json("Blog not found");
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// 🔹 GET blogs by author
router.get("/myblogs/:author", async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.params.author });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 CREATE blog
router.post("/create", async (req, res) => {
  try {
    const { title, description, image, author } = req.body;
    const blog = new Blog({ title, description, image, author }); 
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update Blog

router.put("/update/:id", async (req, res) => {
  try {
    const { title, description, image, author } = req.body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: req.params.id, author }, // ✅ owner check
      { title, description, image },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(403).json("You are not allowed to edit this blog");
    }

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 DELETE blog
router.delete("/delete/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json("Blog not found");
    if (blog.author !== req.body.author) return res.status(403).json("Not allowed");

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 LIKE/UNLIKE blog
router.post("/like/:id", async (req, res) => {
  try {
    const { userId } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json("Blog not found");

    const isLiked = blog.likes.includes(userId);
    if (isLiked) {
      blog.likes = blog.likes.filter(id => id !== userId);
    } else {
      blog.likes.push(userId);
    }

    await blog.save();
    res.json({ likes: blog.likes.length, isLiked: !isLiked });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 ADD comment
router.post("/comment/:id", async (req, res) => {
  try {
    const { user, text } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json("Blog not found");

    if (!Array.isArray(blog.comments)) {
      blog.comments = [];
    }
    const newComment = {
      user,
      text,
      createdAt: new Date()
    };

    blog.comments.push(newComment);

    await blog.save();

    res.json({ comments: blog.comments });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 GET comments for a blog
router.get("/comments/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json("Blog not found");
    res.json(blog.comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
