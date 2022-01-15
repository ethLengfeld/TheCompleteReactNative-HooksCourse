import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {

    const [ searchInput, setSearchInput ] = useState('');
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.searchIcon} size={40} />
            <TextInput 
                value={searchInput}
                onChangeText={(newInput) => {
                    setSearchInput(newInput);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        // backgroundColor: 'red',
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 3,
        height: 70,
        width: 380,
    },
    searchIcon: {
        // size: 40,
        margin: 5,
    }
});

export default SearchBar;