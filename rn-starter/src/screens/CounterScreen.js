import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //   let counter = 0; // not quite correct to initiate STATE, there is no automatic update
  const [counter, setCounter] = useState(0); // 0 is starting value| [] array destructurizing -> assign first
  // value out of useState(0) to counter, and second to setCounter

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++; // don't want to use this as it won't trigger a react rerender
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   counter++;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default CounterScreen;
