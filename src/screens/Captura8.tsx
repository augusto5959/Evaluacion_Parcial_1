import React from "react";
import { StyleSheet, View } from "react-native";

export const Captura8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed}></View>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        flexDirection:"column",
        //alignItems:"center",
        justifyContent:'center'
    },
    boxRed:{
        //flex:1,
        width:100,
        height:100,
        backgroundColor:'red',
        borderWidth: 10,
        borderColor:'white',
        right:0,
        alignSelf:"center"
    },
    boxPurple:{
        //flex:1,
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth: 10,
        borderColor:'white',
        alignSelf:"center",
        left:100
    },
    boxOrange:{
        //flex:1,
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth: 10,
        borderColor:'white',
        alignSelf:"center",
    },
});