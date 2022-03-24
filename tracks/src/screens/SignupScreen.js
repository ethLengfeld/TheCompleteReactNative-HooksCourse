import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return (
    <View style={styles.container}>
      {/* Called anytime we navigate to this component */}
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
