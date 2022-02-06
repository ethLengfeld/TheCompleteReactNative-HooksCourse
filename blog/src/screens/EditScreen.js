import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(
      (blogPost) => blogPost.id === navigation.getParam("id")
    );

    return (
        <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {

        }}/>
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