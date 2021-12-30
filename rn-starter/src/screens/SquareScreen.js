import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const CHANGE_VAL = 10;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // color === 'red' or 'green' or 'blue'
  // change === +CHANGE_VAL or -CHANGE_VAL
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        if (red + change > 255) {
          setRed(255);
        } else if (red + change < 0) {
          setRed(0);
        } else {
          setRed(red + change);
        }
        return;

      case "green":
        if (green + change > 255) {
          setGreen(255);
        } else if (green + change < 0) {
          setGreen(0);
        } else {
          setGreen(green + change);
        }
        return;

      case "blue":
        if (blue + change > 255) {
          setBlue(255);
        } else if (blue + change < 0) {
          setBlue(0);
        } else {
          setBlue(blue + change);
        }
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        // onIncrease={() => {
        //     // Could do this but a lot of duplicate code
        //     // if(red+CHANGE_VAL > 255) {
        //     //     setRed(255);
        //     //     return;
        //     // }
        //     setRed(red + CHANGE_VAL)
        // }}
        // onDecrease={() => setRed(red - CHANGE_VAL)}
        onIncrease={() => setColor("red", CHANGE_VAL)}
        onDecrease={() => setColor("red", -1 * CHANGE_VAL)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', CHANGE_VAL)}
        onDecrease={() => setColor('green', -1* CHANGE_VAL)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', CHANGE_VAL)}
        onDecrease={() => setColor('blue', -1 * CHANGE_VAL)}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      >
        <Text>
          rgb(${red},${green},${blue})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
