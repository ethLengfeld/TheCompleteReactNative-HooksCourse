import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

const PASS_LENGTH = 5;

const TextScreen = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        // this will auto fill with this value
        // value="Example Text"
        value={nameInput}
        onChangeText={(newInput) => {
          setNameInput(newInput);
        }}
      />
      <Text>Hello there, {nameInput}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        // this will auto fill with this value
        // value="Example Text"
        value={passwordInput}
        onChangeText={(newInput) => {
          setPasswordInput(newInput);
        }}
      />
      {/* Print error message for too short password */}
      {passwordInput.length != 0 && passwordInput.length < PASS_LENGTH ? (
        <Text>Password must be longer than {PASS_LENGTH} characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;