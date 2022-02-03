import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(
      (blogPost) => blogPost.id === navigation.getParam("id")
    );
    
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.textInput} value={content} onChangeText={(text) => setContent(text)} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 3,
        margin: 10,
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    }
});

export default EditScreen;