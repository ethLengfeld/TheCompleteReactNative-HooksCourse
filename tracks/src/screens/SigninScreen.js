import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Called anytime we navigate to this component */}
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Go back to sign up."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
