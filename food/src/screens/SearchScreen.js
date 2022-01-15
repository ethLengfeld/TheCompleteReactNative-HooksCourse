import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    return (
        <View>
            <Text>Welcome to Search Screen</Text>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;