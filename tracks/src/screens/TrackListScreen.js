import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail") } />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrackListScreen;
