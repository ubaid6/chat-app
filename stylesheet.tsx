import React from 'react';
import { StyleSheet} from "react-native";

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
    color: "black",
    textAlign: "center",
    backgroundColor: "transparent",
    opacity: 1,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "black",
    marginLeft: 50,
    marginBottom: 0,
    width: 300,
  },

  submit: {
    backgroundColor: "cyan",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 150,
    width: 100,
    height: 30,
    borderRadius: 20,
  },


});


export const home = StyleSheet.create({
  channels: {
    height: 1000,

  },

  create_channel_button: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 650,
  }

});


export const create_channel = StyleSheet.create({
  back: {
    marginTop: 20,
    marginLeft: 10
  },
});

export const channel_card = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    height: 50,
    paddingBottom: 10,
    flexDirection: "row",
  },

  image: {
    width: 50,
    paddingTop: 10,
  },

  text: {
    width: 200,
    alignSelf: "center",
    marginBottom: 0,
  },
})


export const channel = StyleSheet.create({

  header: {
    backgroundColor: "cyan",
    height: 70,
    textAlign:"center",
    flexDirection:"row",
  },

  back: {
    marginTop: 20,
    marginLeft: 10,
  },

  title : {
    marginTop:15,
    width:350,
    textAlign:"center",
    color:"black",

  },

  title_text : {
    textAlign:"center",
    fontFamily:"monospace",
    fontSize:30,
    color:"black",
  },

  messages: {
    flex: 1,
  },

  message_box: {
    flex: 0.2,
    flexDirection: "row",
  },

  input: {
    backgroundColor: "rgba(211, 206, 206, 0.7)",
    maxHeight: 150,
    borderRadius: 20,
    flex: 3,
    marginLeft: 5,
    alignSelf: "flex-end",
    marginBottom: 5,
    paddingLeft:10,
  },

  send_image: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },

  author_message : {
    backgroundColor:"red",
    marginBottom:3,
    marginTop:3,
    height:30,
    paddingTop:5,
    paddingLeft:5,
    flexDirection:"row",
    width:250,
    alignSelf:"flex-end",
    borderRadius:20,
  }



});
















