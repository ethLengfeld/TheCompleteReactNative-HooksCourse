import React from "react";
import { Text, StyleSheet, View } from "react-native";

// could also do ComponentsScreen = fucntion() {} instead of arrow function
const ComponentsScreen = () => {
  // var greeting = 'Hi there!';
  // var greeting = <Text>Hello to you!</Text>;
  // var greeting = [ 123, 456 ];
  // var greeting = { color: 'red' }; // not allowed
  const my_name = "Ethan";

  // ; is optional when not in view
  return (
    <View>
      {/* <Text style={styles.textStyle}>This is the components screen.</Text> */}
      {/* <Text>{greeting}</Text> */}
      {/* {greeting } */}

      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {my_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
