import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import React from 'react';

//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Signup_2
() {
  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>
      <Text>Let's Create Your Account</Text>
      <Text>Creating Reminders Just For You</Text>
      <Text>Username</Text>
      {/*Insert box for user input */}
      <Text>Date of Birth</Text>
      {/*Insert date picker for user input */}
      <Text>By tapping Sign Up, you agree to the terms and condition and
        Privacy Policy of this App
      </Text>

      <Button title="SIGN UP" onPress={()=> console.log("Sign up button pressed")}/>
      <Text>Already a member?</Text>
      <Button title="LOG IN" onPress={()=> console.log("Log in button pressed")}/>
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