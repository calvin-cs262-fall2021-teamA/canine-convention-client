import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF0F4',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      marginBottom: 40,
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
      fontSize: 70,
      fontWeight: 'bold'
    },
    logo: {
      width: 500,
      height: 300,
      marginTop: 100,
    },
    homeBtns:{
      width: "20%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#195F6B",
    },
    header:{
      backgroundColor: '#16BAC6',
      fontWeight: 'bold'
    },
  });