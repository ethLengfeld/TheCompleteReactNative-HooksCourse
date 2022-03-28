import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

/*
Custom hook to enable and disable location services
can be resused to make any callback whenever change is made
*/
export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        // TODO current changing every three seconds due to _mockLocation
        // won't stop tracking until we unsubscribe
        const sub = await watchPositionAsync({
          // accuracy 1-5 km, the higher accuracy the more battery power
          accuracy: Accuracy.BestForNavigation,
          // update every 1 second OR
          timeInterval: 3000,
          // update every 10 meters
          // distanceInterval: 10,
        },
        callback
        // determine what happens when position updates 
        // (location => {
        // //   console.log(location);
        //   callback;
        // })
        );
        setSubscriber(sub);
        if (!granted) {
          throw new Error('Location permission not granted');
        }
      } catch (e) {
        setErr(e);
      }
    };
  
    useEffect(() => {
        if(shouldTrack) {
            startWatching();
        } 
        else {
            // stop tracking location, remove subscriber
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [err];
}