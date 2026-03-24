
import React, { useState, useEffect } from "react";

export default function BlogCard({ blog, onRead, onEdit, onDelete, isOwner }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(blog);

  useEffect(() => {
    if (blog) {
      setCurrentBlog(blog);
      setLikesCount(blog.likes?.length || 0);
      setComments(blog.comments || []);
      // Check if current user liked this blog
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user._id) {
        setLiked(blog.likes?.includes(user._id) || false);
      }
    }
  }, [blog]);

  const handleLike = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) {
      alert("Please login to like blogs");
      return;
    }

    try {
      const response = await fetch(`https://blog-website-2-0-7et4.onrender.com/api/blogs/like/${blog._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id }),
      });

      const data = await response.json();
      setLiked(data.isLiked);
      setLikesCount(data.likes);
      // Update the currentBlog to reflect the change
      setCurrentBlog({ ...currentBlog, likes: data.likedBy || [] });
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

 const handleComment = async () => {
  if (!commentText.trim()) return;

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please login to comment");
    return;
  }

  try {
    const response = await fetch(
      `https://blog-website-2-0-7et4.onrender.com/api/blogs/comment/${blog._id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user.name,
          text: commentText
        }),
      }
    );

    const data = await response.json();

    // ✅ correct update
    setComments(data.comments);
    setCommentText("");

    setCurrentBlog({
      ...currentBlog,
      comments: data.comments
    });

  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

  if (!blog || !blog._id) {
    console.warn("BlogCard: Invalid blog data", blog);
    return null;
  }

  const { title = "Untitled", description = "No description available", image, author = "Unknown" } = currentBlog;

  return (
    <article
      className="
        relative
        bg-luxSurface
        border border-luxBorder
        rounded-2xl
        flex flex-col
        shadow-md shadow-black/30
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-emerald-500/20
      "
    >
    <div className="bg-luxSurface border border-luxBorder rounded-2xl shadow-lg shadow-black/10 flex flex-col">
      {/* Blog image */}
      <div className="rounded-t-2xl overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = "https://picsum.photos/600/400";
            }}
          />
        ) : (
          <div className="w-full h-48 bg-luxBorder flex items-center justify-center text-luxMuted">
            No Image
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-luxHeading mb-2">{title}</h3>

        {/* Description preview */}
        <p className="text-luxMuted text-sm flex-1">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>

        {/* Author */}
        <div className="mt-2 text-sm text-luxMuted">
          ✍ {author}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onRead(blog)}
              className="text-luxAccent font-medium hover:underline transition"
            >
              Read
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center gap-1 transition ${
                liked ? "text-red-500" : "text-luxMuted hover:text-red-500"
              }`}
            >
              ❤️ {likesCount}
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1 text-luxMuted hover:text-luxAccent transition"
            >
              💬 {comments.length}
            </button>
          </div>

          {isOwner && (
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(blog)}
                className="text-luxMuted hover:text-luxAccent transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog._id)}
                className="text-red-500 hover:text-red-400 transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Comment section */}
        {showComments && (
          <div className="mt-4 p-4 bg-luxBorder rounded-lg">
            <h4 className="font-semibold text-luxHeading mb-3">Comments ({comments.length})</h4>
            
            {/* Display all comments */}
            <div className="mb-4 max-h-64 overflow-y-auto space-y-3">
              {comments.length === 0 ? (
                <p className="text-luxMuted text-sm">No comments yet. Be the first!</p>
              ) : (
                comments.map((comment, idx) => (
                  <div key={idx} className="bg-luxSurface p-3 rounded border border-luxBorder">
                    <p className="text-sm font-semibold text-luxAccent">{comment.user}</p>
                    <p className="text-sm text-luxText mt-1">{comment.text}</p>
                    <p className="text-xs text-luxMuted mt-1">
                      {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Add comment input */}
            <div className="border-t border-luxBorder pt-3">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-2 bg-luxSurface border border-luxBorder rounded text-luxText text-sm resize-none"
                rows="2"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setShowComments(false)}
                  className="text-luxMuted hover:text-luxText transition text-sm"
                >
                  Close
                </button>
                <button
                  onClick={handleComment}
                  className="bg-luxAccent text-luxSurface px-3 py-1 rounded text-sm hover:bg-luxAccent/80 transition"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </article>
  );
}
