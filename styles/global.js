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
      fontSize: 40,
      fontWeight: 'bold'
    },
    dogName: {
      fontSize: 25,
      marginRight: 'auto',
      marginTop: 20,
      marginLeft: 20
    },
    subtitle: {
      marginRight: 'auto',
      fontSize: 25,

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
      backgroundColor: "#7DF9FF",
    },
    editBtn:{
      width: "15%",
      borderRadius: 25,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#16BAC6",
      marginTop: 10,
      marginBottom: 'auto',
      marginLeft:'auto'
    },
    pager:{
      height: '50%',
      width: "100%",
      backgroundColor: '#16BAC6',
      borderColor: '#16BAC6',
      borderWidth: 10
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
      backgroundColor: '#16BAC6',
      borderRadius: 25,
      width: 100,
      height: 30,
      justifyContent: 'center',
    },
    tagText: {
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    }
  });