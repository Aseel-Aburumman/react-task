import React from "react";

const Blog: React.FC = () => {
  const posts = ["Post 1", "Post 2", "Post 3"];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Blog Posts</h1>
      <ul className="list-group">
        {posts.map((post, index) => (
          <li key={index} className="list-group-item">
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
