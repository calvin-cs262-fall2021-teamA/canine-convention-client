import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF0F4',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      width: 400,
      height: 400,
      marginBottom: 0,
    },
   
    inputView: {
      backgroundColor: "#FFF",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize: 17,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 15,
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#195F6B",
    },
    title: {
      fontSize: 45,
      fontWeight: 'bold',
    },
    dogName: {
      fontSize: 25,
      marginRight: 'auto',
      marginTop: 20,
      marginLeft: 20,
    },
    subtitle: {
      marginRight: 'auto',
      fontSize: 25,
    },
    logo: {
      width: 500,
      height: 300,
    },
    homeBtns:{
      width: "75%",
      borderRadius: 25,
      height: 50,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#195F6B",
    },
    editBtn:{
      width: "15%",
      borderRadius: 25,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#195F6B",
      marginTop: 10,
      marginLeft:'auto',
    },
    pager:{
      height: '50%',
      width: "100%",
      backgroundColor: '#16BAC6',
      borderColor: '#16BAC6',
      borderWidth: 10,
      borderBottomWidth: 50,
    },
    picture:{
      width: 200,
      height: 100,
      marginVertical: 30
    },
    pictureDog:{
      width: 100,
      height: 75,
      marginBottom: 25,
    },
    tag: {
      fontSize: 20,
      marginLeft: 20,
      backgroundColor: '#195F6B',
      borderRadius: 25,
      width: 100,
      height: 30,
      justifyContent: 'center',
    },
    historyTag: {
      fontSize: 20,
      backgroundColor: '#195F6B',
      borderRadius: 25,
      width: 100,
      height: 30,
      justifyContent: 'center',
    },
    tagText: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: '#FFFFFF',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    ButtonsText: {
      color: '#FFFFFF',
    },
    picturePicker: {
      fontSize: 20,
      backgroundColor: '#195F6B',
      borderRadius: 25,
      width: '60%',
      height: 45,
      justifyContent: 'center',
      marginBottom:30,
      alignItems: 'center',
    },
    historyText: {
      marginRight: 'auto',
      fontSize: 20,
      marginRight: 'auto',
      marginLeft: 20,
      marginBottom: 5
    },
    historyContainer: {
      flex: 1,
      backgroundColor: '#EFF0F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });