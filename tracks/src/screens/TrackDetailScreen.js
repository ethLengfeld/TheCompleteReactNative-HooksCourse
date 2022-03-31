import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";


const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find(trackToFind => trackToFind._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text h2>{track.name}</Text>
      <MapView style={styles.map}
        initialRegion={{
          ...initialCoords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01
        }}
        >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
    width: 400,
  },
});

export default TrackDetailScreen;
