import React, { useContext } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  if (!state) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.text}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrackListScreen;
