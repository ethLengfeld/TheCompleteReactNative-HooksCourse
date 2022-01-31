import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.textInput} value={content} onChangeText={(text) => setContent(text)} />
            <Button title="Add Blog Post" onPress={() => {
                addBlogPost(title, content, () => {
                    navigation.navigate("Index");
                });
                // navigation.navigate("Index"); this works but isn't the best. in case we do any external api calls
            }
            }/>
        </View>
    );
}

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

export default CreateScreen;