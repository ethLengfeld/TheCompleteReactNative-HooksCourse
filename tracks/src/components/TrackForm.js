import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  // console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>

      <Spacer>
        {recording ? (
          <Button style={styles.stopBtn} title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        { !recording && locations.length ? <Button title="Save Recording" onPress={saveTrack} /> : null }
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
    stopBtn: {
        color: 'red',
    }
})
export default TrackForm;
