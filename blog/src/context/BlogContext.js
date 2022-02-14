import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        // if (blogPost.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //   return blogPost;
        // }
      });
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: "get_blogpost", payload: response.data })
  };
};

const addBlogPost = (dispatch) => {
  // add callback for api
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    // dispatch({ type: "add_blogpost", payload: { title, content } });
    if(callback) {callback()}
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if(callback) {callback()}
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPost, addBlogPost, deleteBlogPost, editBlogPost },
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
