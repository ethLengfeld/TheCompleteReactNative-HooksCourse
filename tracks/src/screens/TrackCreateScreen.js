import '../_mockLocation';
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync({
        // accuracy 1-5 km, the higher accuracy the more battery power
        accuracy: Accuracy.BestForNavigation,
        // update every 1 second OR
        timeInterval: 3000,
        // update every 10 meters
        // distanceInterval: 10,

      }, (location => {
        // console.log(location);
      }))
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);


  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text style={styles.errorTxt}>{err.toString()}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorTxt: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
});

export default TrackCreateScreen;
