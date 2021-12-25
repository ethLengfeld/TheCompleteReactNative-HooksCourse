import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        // { name: "Friend #1", key: '1' },
        // { name: "Friend #2", key: '2' },
        // { name: "Friend #3", key: '3' },
        // { name: "Friend #4", key: '4' },
        // { name: "Friend #5", key: '5' },
        // { name: "Friend #6", key: '6' },
        // { name: "Friend #7", key: '7' },
        // { name: "Friend #8", key: '8' },
        // { name: "Friend #9", key: '9' },
        // OR with KeyExtrator
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 45 },
        { name: "Friend #3", age: 32 },
        { name: "Friend #4", age: 27 },
        { name: "Friend #5", age: 53 },
        { name: "Friend #6", age: 30 },
        { name: "Friend #7", age: 24 },
        { name: "Friend #8", age: 33 },
        { name: "Friend #9", age: 67 },

    ]

    return (
        // <Text>List Screen</Text>
        <FlatList
            // horizontal  - make list scroll horizontally
            // horizontal={true} same as just horizontal
            showsHorizontalScrollIndicator={false} // hide scroll bar that appears at bottom
            keyExtractor={(friend) => friend.name}
            data={friends} 
            // {item} is direct reference to that item in each element 
            renderItem={({ item }) => {
                // element === { item: { name: 'Friend #1 }, index: 0 }
                return (
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreen;