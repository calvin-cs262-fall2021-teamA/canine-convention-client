import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { BackHandler, View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ActivityIndicator, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ButtonGroup, Icon } from "react-native-elements";
import { globalStyles } from "../styles/global";
import SelectDropdown from "react-native-select-dropdown";


export default function Map({ route, navigation }) {
  /*
  const [eventType, setEventType] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogChar, setDogChar] = useState("");
  const [dogStatus, setDogStatus] = useState("");
  */
  const [eventData, setEventData] = useState('{}');
  const [showEvents, setShowEvents] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [location, setLocation] = useState(42, 42);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [dogData, setDogData] = useState(null);
  const [dog, setDog] = useState(null);

  //Get Dog info from the DataBase
  const getDogInfo = async () => {
    try {
      const response = await fetch(
        "https://canine-convention.herokuapp.com/person/" + route.params + "/dogs"
      );
      const json = await response.json();
      setDogData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  // Check events available
  const getEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://canine-convention.herokuapp.com/events');
      const json = await response.json();
      setEventData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  // Create Event
  const createEvent = async (loc, creatorID) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "location": loc,
          "creatorID": creatorID,
          "email": email,
          "phone": phone
        })
      };
      const response = await fetch('https://canine-convention.herokuapp.com/event', requestOptions);
      const json = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  //find Event
  const findEvent = () => {
    setShowEvents(true);
    getEvents();
  }
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["20%", "60%"], []);

  const [mapRegion, setMapRegion] = useState(null);
  useEffect(() => {
    getDogInfo();
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
        onLongPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >

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
            {isLoading ? <ActivityIndicator /> : (
              <SelectDropdown
                buttonStyle={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderColor: "#000000",
                  marginVertical: "6%",
                }}
                data={dogData}
                defaultButtonText="Choose Dog"
                onSelect={(selectedItem, index) => {
                  setDog(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem.dogname;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item.dogname;
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
            )}
            {/*<ButtonGroup
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
            */}
            <TouchableOpacity
              style={globalStyles.homeBtns}
              onPress={() => findEvent()}
            >
              <Text style={(globalStyles.loginText, globalStyles.ButtonsText)}>
                FIND
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
      <Modal transparent={true} fullScreen={true} visible={showEvents} animationType='slide'>
        <View style={globalStyles.container}>
          <View style={popStyle.box}>
            <Text> Events found: </Text>
            {isLoading ? <ActivityIndicator /> : (
              <FlatList
                data={eventData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{ marginTop: "2%", alignSelf: 'center', borderWidth: 1, borderRadius: 5, justifyContent: "space-between", flexDirection: "row", width: "95%", padding: "5%" }}
                    onPress={() => {navigation.navigate("Match Found", [route.params, item, dog]) }}
                  >
                    <Text>{item.location['x']} {item.location['y']}, created by {item.firstname} {item.lastname}</Text>
                    <Icon
                      name="chevron-right"
                      type="font-awesome-5"
                      color={"#444"}
                      size={18}
                    />
                  </TouchableOpacity>
                )}
              />)}
            <TouchableOpacity
              onPress={() => setShowCreateEvent(true)}>
              <Text>Want a different event? Create it here!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowEvents(false)}
              style={styles.modalToggle}
            >
              <Text>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal transparent={true} fullScreen={true} visible={showCreateEvent} animationType='slide'>
        <View style={globalStyles.container}>
          <View style={popStyle.box}>
            <Text> Create an event: </Text>
            <View style={styles.contentContainer}>
              <SelectDropdown
                buttonStyle={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderColor: "#000000",
                  marginVertical: "6%",
                }}
                data={dogData}
                defaultButtonText="Choose Dog"
                onSelect={(selectedItem, index) => {
                  setDog(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem.dogname;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item.dogname;
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
            </View>
            <TouchableOpacity
              onPress={() => { createEvent(location, route.params.id); setShowCreateEvent(false) }}
              style={styles.modalToggle}
            >
              <Text>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

const popStyle = StyleSheet.create({
  boxBackground: {
    backgroundColor: "#000000aa",
    flex: 1,
  },

  box: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 25,
    height: '50%',
    borderRadius: 10,
    alignItems: 'center'
  },

  boxText: {
    fontSize: 50,
  }
});