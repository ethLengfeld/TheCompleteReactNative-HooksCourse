import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      // want to rebuild state
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

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

const signout = (dispatch) => {
  return () => {
    // sign out, update state
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
