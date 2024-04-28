import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import React from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function ForgotPassword() {
  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>You'll get new verification in the email address provided</Text>
      <Text>Email Address</Text>
      {/*insert box for user input */}
      <Button title ="SEND CODE" onPress={()=> console.log("Send code button pressed")}/>

      <Image source={Final_Name_Image}/>
    </ImageBackground>
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
    
  }


})