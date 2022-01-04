import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const CHANGE_VAL = 10;

// action = how should we change the state object
const reducer = (state, action) => {
    switch(action.colorToChange) {
      case 'red':
        // console.log("changing red");
        return { ...state, red: state.red + action.amount };
      case 'green':
        // console.log("changing green");
        return { ...state, green: state.green + action.amount };
      case 'blue':
        // console.log("changing blue");
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
}

const SquareScreen = () => {

  // dispatch === run my reducer
  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: CHANGE_VAL })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1*CHANGE_VAL })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: CHANGE_VAL })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1*CHANGE_VAL })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: CHANGE_VAL })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1*CHANGE_VAL })}
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
          {/* rgb(${state.red},${state.green},${state.blue}) */}
          rgb(${red},${green},${blue})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
