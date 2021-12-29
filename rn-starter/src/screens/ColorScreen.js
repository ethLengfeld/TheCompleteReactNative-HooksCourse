import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';

const ColorScreen = () => {
    const [ colors, setColors ] = useState([]);
    // console.log(colors);

    return (
        <View>
            <Button 
                title="Add a Color"
                onPress={()=>{
                    // ... re-add existing colors into colors array
                    setColors([...colors, randomRgb()]);
                }}
            />

            <FlatList
            keyExttractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    // item = `rgb(213, 12, 234)
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}>
                            <Text>{item}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;