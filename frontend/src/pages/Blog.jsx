import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['Technology', 'Lifestyle', 'Travel', 'Food', 'Health', 'Business', 'Education', 'Entertainment'];

  // Fetch all blogs
  useEffect(() => {
    fetch("http://localhost:5050/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category === selectedCategory)
    : blogs;

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-luxHeading mb-4">Our Blog</h1>
          <p className="text-xl text-luxMuted max-w-2xl mx-auto">
            Discover amazing stories, insights, and perspectives from our community of writers.
            Explore topics that inspire, educate, and entertain.
          </p>
          {selectedCategory && (
            <div className="mt-4">
              <span className="text-luxAccent font-medium">Showing: </span>
              <span className="text-luxHeading font-semibold">{selectedCategory}</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className="ml-4 text-luxMuted hover:text-luxAccent transition"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-luxHeading mb-8 text-center">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`bg-luxSurface border rounded-xl p-6 text-center transition cursor-pointer ${
                  selectedCategory === category
                    ? 'border-luxAccent bg-luxAccent/10'
                    : 'border-luxBorder hover:border-luxAccent'
                }`}
              >
                <h3 className="text-lg font-semibold text-luxHeading">{category}</h3>
                <p className="text-sm text-luxMuted mt-1">
                  {blogs.filter(blog => blog.category === category).length} posts
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-16">
            <p className="text-luxMuted">Loading blogs...</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-luxHeading">
                {selectedCategory ? `${selectedCategory} Blogs` : 'All Blogs'} ({filteredBlogs.length})
              </h2>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-luxMuted">No blogs found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => {
                  const user = JSON.parse(localStorage.getItem("user"));
                  const isOwner = user && user.email === blog.author;
                  return (
                    <BlogCard
                      key={blog._id}
                      blog={blog}
                      isOwner={isOwner}
                      onRead={(blog) => {
                        // You can implement modal or navigation here
                        console.log("Read blog:", blog);
                      }}
                      onEdit={(blog) => {
                        // Navigate to edit page
                        console.log("Edit blog:", blog);
                      }}
                      onDelete={(id) => {
                        // Handle delete
                        console.log("Delete blog:", id);
                      }}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}