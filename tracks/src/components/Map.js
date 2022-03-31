import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    // destructure off currentLocation
    const { state: { currentLocation, locations } } = useContext(LocationContext);
    // console.log(state);
    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //     if ( i % 2 === 0) {
    //         points.push({
    //             latitude: 37.33233 + (i * 0.001),
    //             longitude: -122.03121 + (i * 0.001)
    //         })
    //     } else {
    //         points.push({
    //             latitude: 37.33233 - (i * 0.002),
    //             longitude: -122.03121 + (i * 0.001)
    //         })
    //     }
    // }
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    const initialLocation = {
        latitude: 43.1410,
        longitude: -90.0705
    }

    return (
        <View>
            <MapView style={styles.map} 
            initialRegion={{
                ...initialLocation,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            // automatically update screen with new location
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            >
                {/* <Polyline coordinates={points}/> */}
                <Circle 
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)} />
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