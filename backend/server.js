const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Blog = require("./models/Blog");
const mockBlogs = require("./data/mockBlogs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

async function startServer() {
  // Connect DB first
  await connectDB();

  // Clear existing blogs and insert fresh mock data
  await Blog.deleteMany({});
  await Blog.insertMany(mockBlogs);
  console.log("✅ Mock blogs inserted (fresh)");

  // Start server
  app.listen(5050, () => {
    console.log("🚀 Server running on port 5050");
  });
}

startServer();