import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { BackHandler, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ButtonGroup, Icon } from "react-native-elements";
import { globalStyles } from "../styles/global";
import SelectDropdown from "react-native-select-dropdown";


export default function Map({ route, navigation }) {
  const [eventType, setEventType] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
  const [dogStatus, setDogStatus] = useState("");
  const dogNames = ["Fido", "Rover", "Snowball"];
  // ref
  const bottomSheetRef = useRef(null);

  const handleExpandPress = () => bottomSheetRef.current.expand()

  // variables
  const snapPoints = useMemo(() => ["20%", "80%"], []);

  const [mapRegion, setMapRegion] = useState(null);
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
        onLongPress={e => console.log(e.nativeEvent)}
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
        index={0}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.contentContainer}>
            <SelectDropdown
              buttonStyle={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#000000",
                marginVertical: "6%",
              }}
              data={dogNames}
              defaultButtonText="Choose Dog"
              onSelect={(selectedItem, index) => {
                //console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              renderDropdownIcon={() => {
                return (
                  <Icon
                    name="chevron-down"
                    type="font-awesome-5"
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
            />
            <ButtonGroup
              buttons={["WALK", "PARK"]}
              selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
              selectedIndex={eventType}
              containerStyle={{ marginBottom: "5%" }}
              onPress={(value) => {
                setEventType(value);
              }}
            />
            <Text style={{ textAlign: "center", fontSize: 20 }}>Filters:</Text>
            <ButtonGroup
              buttons={["SMALL", "MEDIUM", "LARGE"]}
              selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
              selectedIndex={dogSize}
              containerStyle={{ marginBottom: "5%" }}
              onPress={(value) => {
                setDogSize(value);
              }}
            />
            <ButtonGroup
              buttons={["MALE", "FEMALE"]}
              selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
              selectedIndex={dogGender}
              containerStyle={{ marginBottom: "5%" }}
              onPress={(value) => {
                setDogGender(value);
              }}
            />
            <ButtonGroup
              buttons={["CALM", "PLAYFUL", "FRIENDLY"]}
              selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
              selectedIndex={dogChar}
              containerStyle={{ marginBottom: "5%" }}
              onPress={(value) => {
                setDogChar(value);
              }}
            />
            <ButtonGroup
              containerStyle={{ marginTop: "4%" }}
              selectedButtonStyle={{ backgroundColor: "#16BAC6" }}
              buttons={["NEUTERED", "NOT NEUTERED"]}
              selectedIndex={dogStatus}
              onPress={(value) => {
                setDogStatus(value);
              }}
            />
            <TouchableOpacity
              style={globalStyles.homeBtns}
              onPress={() => navigation.navigate("Match Found", route.params)}
            >
              <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                FIND
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
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
