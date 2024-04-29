import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function ForgotPassword() {

  //username declaration
  const [User_Email, setEmail]= useState("");

  return (
    <SafeAreaView style ={styles.container}> 
      <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>You'll get new verification in the email address provided</Text>

      <Text>Email Address</Text>
    <TextInput style= {styles.input} value ={User_Email} onChangeText={setEmail} 
    placeholder="example@gmail.com" />

      <TouchableOpacity style = {styles.square_buttons} onPress={()=> console.log("Send code button pressed")}>
        <Text>SEND CODE</Text>
      </TouchableOpacity>
      

      <Image source={Final_Name_Image}/>
    </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  final: {
    
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 
    
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1, 
  },


})