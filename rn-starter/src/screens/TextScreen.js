import react from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    return (
        <View>
            {/* <Text>Text Screen</Text> */}
            <TextInput style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;