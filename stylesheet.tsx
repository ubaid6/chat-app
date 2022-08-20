import React from 'react';
import { StyleSheet } from "react-native";

export const register = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "monospace",
    textAlign: "center",
    color: "black",
    backgroundColor: "cyan",
    height: 70,
  },

  bodyView: {
    paddingTop: 200,
  },


  bodyText: {
    fontSize: 20,
    fontFamily: "monospace",
    textAlign: "center",
    color: "black",
  },

  bodyInput: {
    fontSize: 15,
    fontFamily: "monospace",
    color:"black",
    textAlign:"center",
    backgroundColor: "transparent",
    opacity:1,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "black",
    marginLeft:50,
    marginBottom:0,
    width: 300,
  },

  submit: {
    backgroundColor:"cyan",
    alignItems:"center",
    marginTop:20,
    marginLeft:150,
    width:100,
    height:30,
    borderRadius:20,
  },


});


export const home = StyleSheet.create({
  channels : {
    backgroundColor: "red",
    height : 1000,

  },
});


export const create_channel = StyleSheet.create({
  back : {
    marginTop:20,
    marginLeft:10
  },
});
















