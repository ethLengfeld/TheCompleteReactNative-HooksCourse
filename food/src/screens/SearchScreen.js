import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [ searchInput, setSearchInput ] = useState('');

    return (
        <View style={styles.background}>
            <Text>Welcome to Search Screen</Text>
            <SearchBar searchInput={searchInput} searchInputChange={(newInput) => setSearchInput(newInput)} />
            <Text>You want to search on: {searchInput}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    }
});

export default SearchScreen;