import React from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "deleted_blogpost":
      return state;
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  [] 
);

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
// const [blogPosts, dispatch] = useReducer(blogReducer, []);
//
// const addBlogPost = () => {
//   dispatch({ type: 'add_blogpost' })
// };
//
//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
