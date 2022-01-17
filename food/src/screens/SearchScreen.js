import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState("");
    // MOVED state and effect from here TO useResults Hook
  const [searchApi, results, searched, errMessage] = useResults();

  return (
    <View style={styles.background}>
      {/* <Text>Welcome to Search Screen</Text> */}
      <SearchBar
        searchInput={searchInput}
        searchInputChange={(newInput) => setSearchInput(newInput)}
        onSearchSubmit={() => {
          //   console.log("submitted search criteria: " + searchInput);
          searchApi(searchInput);
        }}
      />
      <Text>You want to search on: {searchInput}</Text>
      {errMessage ? (
        <Text style={styles.errorMessage}>{errMessage}</Text>
      ) : null}
      {searched ? <Text>We have found {results.length} results</Text> : null}
      <ResultsList title='Cost Effective' />
      <ResultsList title='Bit Pricier' />
      <ResultsList title='Big Spender!' />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  errorMessage: {
    color: "red",
  },
});

export default SearchScreen;
