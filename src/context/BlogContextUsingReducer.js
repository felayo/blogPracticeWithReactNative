import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_post':
            return [...state, {title: `blogpost #${state.length + 1}`}]
            break;
        default:
            return state;
  }
};

export const BlogProvider = ({ children }) => {
    const [BlogPosts, dispatch] = useReducer(blogReducer, []);
    
    const addBlogPost = () => {
        dispatch({type: 'add_post'})
    }

  return (
    <BlogContext.Provider value={{ data: BlogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
