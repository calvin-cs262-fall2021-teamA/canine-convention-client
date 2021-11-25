import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { BackHandler, View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function Map({ route, navigation }) {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const [mapRegion, setMapRegion] = useState(null);
  const [location, setlocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={mapRegion}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 42.96731,
            longitude: -85.639156,
          }}
          title="Fuller Park"
          source={require("../assets/map_marker.png")}
        ></Marker>
        <Marker
          coordinate={{
            latitude: 42.959025,
            longitude: -85.675905,
          }}
          title="Downtown Dog Park"
          source={require("../assets/map_marker.png")}
        ></Marker>
        <Marker
          coordinate={{
            latitude: 42.972993,
            longitude: -85.716083,
          }}
          title="Covell"
          source={require("../assets/map_marker.png")}
        ></Marker>
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
