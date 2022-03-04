import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
