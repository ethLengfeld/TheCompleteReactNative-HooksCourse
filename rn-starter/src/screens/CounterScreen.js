import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      // not necessary but future proofs it
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  //   let counter = 0; // not quite correct to initiate STATE, there is no automatic update
  // const [counter, setCounter] = useState(0); // 0 is starting value| [] array destructurizing -> assign first
  // value out of useState(0) to counter, and second to setCounter

  // TODO add reducer here
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const [ changeAmount, setChangeAmount ] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++; // don't want to use this as it won't trigger a react rerender
          // setCounter(counter + 1); useState
          dispatch({ type: "increment", payload: changeAmount });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   counter++;
          // setCounter(counter - 1);
          dispatch({ type: "decrement", payload: changeAmount });
        }}
      />
      <Text>Current Count: {state.count}</Text>
      <Button
        title="Tap to increase amount of counter"
        onPress={()=>{
          setChangeAmount(changeAmount+1);
        }}
      />
      <Text>Currently changing the counter amount by {changeAmount}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default CounterScreen;
