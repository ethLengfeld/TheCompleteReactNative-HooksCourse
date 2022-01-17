import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  // MOVED state and effect from here TO useResults Hook
  const [searchApi, results, errMessage] = useResults();
  const [searched, setSearched] = useState(false);

  // helper function to filter results by Price $ || $$ || $$$
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={styles.background}>
    // View may be constraining to our layout
    // INSTEAD we can use empty element
    <>    
      <SearchBar
        searchInput={searchInput}
        searchInputChange={(newInput) => setSearchInput(newInput)}
        onSearchSubmit={() => {
          searchApi(searchInput);
          setSearched(true);
        }}
      />
      {errMessage ? (
        <Text style={styles.errorMessage}>{errMessage}</Text>
      ) : null}
      {/* {searched ? <Text>We have found {results.length} results</Text> : null} */}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender!"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
      </>
    // </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  errorMessage: {
    color: "red",
  },
});

export default SearchScreen;
