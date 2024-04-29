import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';
//import { useState } from 'react';

//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Verify() {

 //const [OTP, setOTP] = useState('');
 

  return (
    <SafeAreaView style= {styles.container}>
      <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>

      <Text>Let's Verify Your Email</Text>
      <Text>Code is given to your given email</Text>
      {/* inset box for otp*/ }
      {/*<TextInput style= {styles.input} value ={OTP} onChangeText={setOTP} 
        placeholder= "Enter OTP" keyboardType = "numeric"/>*/}

      <Text>Didn't receive code? </Text>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Resend button pressed")}>
      <Text>Resend Code!</Text>
      </TouchableOpacity>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Verify button pressed")}>
      <Text>VERIFY EMAIL</Text>
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