import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"; // Text is example of primitive react element (or View, Image, Button)

// const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  // TODO compare the
  // console.log(props);
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Here is the Screen</Text>
      {/* // line of JSX, uses Bable to convert this JSX into Javascript */}
      {/* create reusable component for button */}
      <Button
        title="Go to Components Demo"
        onPress={() => {
          // console.log('Button Pressed')
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => {
          navigation.navigate("Sqaure");
        }}
      />
      {/* <TouchableOpacity onPress={() => {
          // console.log('List Pressed')
          props.navigation.navigate('List');
        }
      }>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
