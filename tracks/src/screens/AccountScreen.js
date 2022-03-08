import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;
