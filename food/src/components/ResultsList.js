import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.imageScroll}>
        <Text>IMAGES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 10,
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    imageScroll: {
        flexDirection: 'row',
    }
});

export default ResultsList;
