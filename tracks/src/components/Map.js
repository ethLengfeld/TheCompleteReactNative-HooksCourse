import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    let diff = 0.001
    for (let i = 0; i < 20; i++) {
        if ( i % 2 === 0) {
            points.push({
                latitude: 37.33233 + (i * 0.001),
                longitude: -122.03121 + (i * 0.001)
            })
        } else {
            points.push({
                latitude: 37.33233 - (i * 0.002),
                longitude: -122.03121 + (i * 0.001)
            })
        }

    }
    return (
        <View>
            <MapView style={styles.map} 
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            >
                <Polyline coordinates={points}/>
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    map: {
        height: 400,
        width: 400,
    }
});

export default Map;