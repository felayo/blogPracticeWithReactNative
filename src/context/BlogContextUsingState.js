import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [BlogPosts, setBlogPosts] = useState([]);
  const addBlogPost = () => {
    setBlogPosts([
      ...BlogPosts,
      { title: `the number of blogpost is #${BlogPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider value={{ data: BlogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
