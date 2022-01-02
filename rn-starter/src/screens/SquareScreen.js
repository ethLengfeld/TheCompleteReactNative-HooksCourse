import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const CHANGE_VAL = 10;

// action = how should we change the state object
const reducer = (state, action) => {
    
}

const SquareScreen = () => {

  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() => {}}
        onDecrease={() => {}}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {}}
        onDecrease={() => {}}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {}}
        onDecrease={() => {}}
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
