import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const CHANGE_VAL = 10;

// action = how should we change the state object
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      // console.log("changing red");
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      // console.log("changing green");
      // return { ...state, green: state.green + action.amount };
      return state.green + action.payload > 255 || state.green + action.payload < 0
      ? state
      : { ...state, green: state.green + action.payload };
    case "change_blue":
      // console.log("changing blue");
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
      ? state
      : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // dispatch === run my reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          // dispatch({ colorToChange: "red", amount: CHANGE_VAL })

          // community convention
          dispatch({ type: "change_red", payload: CHANGE_VAL })

        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * CHANGE_VAL })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: CHANGE_VAL })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * CHANGE_VAL })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: CHANGE_VAL })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * CHANGE_VAL })
        }
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
