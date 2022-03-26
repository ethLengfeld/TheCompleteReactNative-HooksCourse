import * as Location from 'expo-location';

// ~10 meters in lat & long
const tenMetersWithDegrees = 0.001;

const getLocation = increment => {
    return {
        timestamp: new Date(),
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 37.33233141 + increment * tenMetersWithDegrees,
            longitude: -122.0312186 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 3000)