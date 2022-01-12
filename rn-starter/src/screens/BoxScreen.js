import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        // <View style={styles.viewStyle}>
        <View style={styles.boxesStyle}>
            {/* <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text> */}
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // flexDirection: 'row', // column is default
        height: 200,
        // alignItems: 'center', // stretch, flex-start, center, flex-end
        // justifyContent: 'flex-start', // flext-start, center, space-around
    },
    // textStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // marginVertical: 20,
    //     // marginHorizontal: 20,
    //     // = 
    //     // margin: 20
    // }
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1, // fill as much screen
        // flex: 4, // 40%

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1,
        // flex: 4, // 40%
        // alignSelf: 'center' // override alignItems on parent
        position: 'absolute',
        // alignSelf: 'flex-start',
        fontSize: 18,
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // = 
        // ...StyleSheet.absoluteFillObject,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1,
        // flex: 2, // 20%
    },
 // ---------------------------------------------------------- //   
    // EXCERCISE
    boxesStyle: {
        borderWidth: 3, // TODO delete
        borderColor: 'black', // TODO delete
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    box1: {
        height: 75,
        width: 75,
        backgroundColor: 'red',
    },
    box2: {
        height: 75,
        width: 75,
        backgroundColor: 'green',
        // alignSelf: 'flex-end'
        marginTop: 70,
    },
    box3: {
        height: 75,
        width: 75,
        backgroundColor: 'purple',
    },

});

export default BoxScreen;