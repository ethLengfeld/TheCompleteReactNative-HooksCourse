import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const ImageDetail = (props) => {
const ImageDetail = ({ title, imageSource, score }) => {
  // TODO add useState
  // console.log(props);
  return (
    <View>
      <TouchableOpacity onPress={() => {
          console.log("pressed "+ title + " image with score of " + score);
      }}>
        <Image source={imageSource} />
      </TouchableOpacity>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
