import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Map({ route, navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let locText = "";
  let locText2 = "";
  let locParse = "";
  let locInt = 0;
  let locInt2 = 0;
  if (errorMsg) {
    locText = errorMsg;
  } else if (location) {
    locText = JSON.stringify(location);
    locParse = JSON.parse(locText);
    locText = JSON.stringify(locParse.coords.latitude);
    locText = JSON.stringify(location);
    locParse = JSON.parse(locText);
    locText = JSON.stringify(locParse.coords.latitude);
    locInt = parseFloat(locText);
    locText2 = JSON.stringify(locParse.coords.longitude);
    locInt2 = parseFloat(locText2);
  }
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 42.916698436043596,
        longitude: -85.594293001987552,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    ></MapView>
  );
}
