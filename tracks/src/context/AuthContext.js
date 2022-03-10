import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect error
    try {
      const response = await trackerApi.post('/signup', { email, password } );
      console.log(response.data);
    } catch (err) {
      // console.log(err.response.data);
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Success update state
    // Error show message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out, update state
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: '', errorMessage: '' }
);
