import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import { NavigationContext } from "react-navigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      // want to rebuild state
      return { errorMessage: "", token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: "" }
    case 'signout':
      return { token: null, errorMessage: "" }
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if(token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // return async ({ email, password }) => {
    // make api request to sign up with email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect error
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      // navigate to main flow
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: `Something went wrong with sign up\n${err.response.data}`,
      });
    }
  };
// };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    // Try to signin
    // Success update state
    // Error show message
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      // navigate to main flow
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: `Something went wrong with sign in\n${err.response.data}`,
      });
    }
  };

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: 'signout' });
  navigate('loginFlow');

};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
