import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }}/>
      <Text style={styles.restName}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    padding: 1
  },
  image: {
    marginBottom: 5,
    width: 250,
    height: 150,
    borderRadius: 4
  },
  restName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultsDetail;