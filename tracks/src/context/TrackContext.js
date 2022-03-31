import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            // trust data that we got from payload
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get("/tracks");
    dispatch( {type: "fetch_tracks", payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
   console.log("create track:" + name.toString() + " locations:" + locations.length.toString());
   await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);