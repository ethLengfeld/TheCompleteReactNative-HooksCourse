import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginBottom: 15,
  },
  titleStyle: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ResultsList;
