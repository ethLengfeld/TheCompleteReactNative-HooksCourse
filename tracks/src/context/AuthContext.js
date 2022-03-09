import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect error
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
  { isSignedIn: false }
);
