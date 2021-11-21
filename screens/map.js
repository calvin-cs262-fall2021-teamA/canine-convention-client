import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { BackHandler,View } from "react-native";
import{Icon} from "react-native-elements";
import { globalStyles } from "../styles/global";

export default function Map({ route, navigation }) {
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
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={mapRegion}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{
          latitude: 42.967310,
          longitude: -85.639156
        }}
        title = "Fuller Park"
        source={require('../assets/map_marker.png')}>
        </Marker>
        <Marker
        coordinate={{
          latitude: 42.959025,
          longitude: -85.675905
        }}
        title = "Downtown Dog Park"
        source={require('../assets/map_marker.png')}>

        </Marker>
        <Marker
        coordinate={{
          latitude: 42.972993,
          longitude: -85.716083
        }}
        title = "Covell"
        source={require('../assets/map_marker.png')}>
        </Marker>
        <View style={globalStyles.navigationBarMap}>
      <Icon 
        raised
        name = "person"
        onPress={() => navigation.navigate("Profile")}
        
      />
      <Icon
      raised 
      name= "home"
      type="ionicon"
      onPress={() => navigation.navigate("Home")}
      
      />
      <Icon
        raised
        name= "log-out"
        type="ionicon"
        onPress={() => navigation.navigate("Start")} 
      />
      </View>           
   </MapView>
   
  );
    }
