import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const ImageDetail = (props) => {
const ImageDetail = ({ title, imageSource, score }) => {
  // TODO add useState
  // console.log(props);
  const [pressScore, setPressScore] = useState(score);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setPressScore(pressScore + 1);
          console.log("pressed " + title + " image with score of " + pressScore);
        }}
      >
        <Image source={imageSource} />
      </TouchableOpacity>
      <Text>{title}</Text>
      <Text>Image Score - {pressScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;