import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // { email, name, ... }

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`https://blog-website-2-0-7et4.onrender.com/api/blogs/myblogs/${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch your blogs");
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => {
        console.error(err);
        setError("Could not load your blogs");
      });
  }, [navigate, user]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://blog-website-2-0-7et4.onrender.com/api/blogs/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: user.email }),
      });
      if (!res.ok) throw new Error("Failed to delete blog");
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
      alert("Could not delete blog");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
      <h2 className="text-3xl font-bold text-luxHeading mb-10">My Blogs</h2>

      {error && <p className="text-luxMuted mb-6">{error}</p>}

      {blogs.length === 0 && !error && (
        <p className="text-luxMuted">You haven’t published any blogs yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id || blog.title}
            blog={blog}
            isOwner={true}
            onRead={() => setSelectedBlog(blog)}
            onEdit={() => navigate(`/edit/${blog._id}`)}
            onDelete={() => handleDelete(blog._id)}
          />
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-luxSurface border border-luxBorder rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-luxBorder bg-luxSurface">
              <h2 className="text-2xl font-bold text-luxHeading">{selectedBlog.title}</h2>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-luxMuted hover:text-luxHeading transition text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {selectedBlog.image && (
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  onError={(e) => {
                    e.target.src = "https://picsum.photos/600/400";
                  }}
                />
              )}
              <p className="text-sm text-luxMuted mb-4">✍ {selectedBlog.author}</p>
              {selectedBlog.category && (
                <p className="text-sm text-luxAccent mb-4">📁 {selectedBlog.category}</p>
              )}
              <div className="text-luxText leading-relaxed whitespace-pre-wrap">
                {selectedBlog.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
