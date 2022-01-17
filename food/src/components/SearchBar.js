import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchInput, searchInputChange, onSearchSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchInput}
        placeholder="Search"
        value={searchInput}
        onChangeText={(newInput) => {
          searchInputChange(newInput);
        }}
        onEndEditing={() => onSearchSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    flexDirection: "row",
    margin: 15,
    borderRadius: 3,
    height: 50,
  },
  searchIcon: {
    fontSize: 40,
    marginHorizontal: 5,
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
});

export default SearchBar;
