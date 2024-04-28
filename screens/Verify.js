import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Verify() {

  const [OTP, setOTP] = useState('');
 

  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>

      <Text>Let's Verify Your Email</Text>
      <Text>Code is given to your given email</Text>
      {/* inset box for otp*/ }
      <TextInput style= {styles.input} value ={OTP} onChangeText={setOTP} 
        placeholder= "Enter OTP" keyboardType = "numeric"/>

      <Text>Didn't receive code? </Text>

      <Button title="Resend Code!"onPress={()=> console.log("Resend button pressed")}/>
      <Button title="VERIFY EMAIL" onPress={()=> console.log("Verify button pressed")}/>

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
    
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1, 
  },



})