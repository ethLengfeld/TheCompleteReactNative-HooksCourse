import React, { useState, useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h2>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {state.errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text h4 style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  errorMessage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;
