import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        term: searchInput,
        limit: 50,
        location: "chicago",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.background}>
      <Text>Welcome to Search Screen</Text>
      <SearchBar
        searchInput={searchInput}
        searchInputChange={(newInput) => setSearchInput(newInput)}
        onSearchSubmit={() => {
          console.log("submitted search criteria: " + searchInput);
          searchApi();
        }}
      />
      <Text>You want to search on: {searchInput}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
