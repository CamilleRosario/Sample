import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView,TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
//import { OtpInput } from 'react-native-otp-entry';

//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Verify() {

 const [OTP, setOTP] = useState([" ", " ", " ", " ", " ", " "] );
 

  return (
    <SafeAreaView style= {styles.container}>
      <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>

      <Text>Let's Verify Your Email</Text>
      <Text>Code is given to your given email</Text>
     <View style= {styles.OTPContainer}>
     {OTP.map ((value, index) => (
        <TextInput
          key={index}
          style ={styles.otpInput}
          maxLength={1}
          keyboardType='numeric'
        />
      ))}
     </View>
     

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

    otpInput: {
    height:50, 
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    margin: 5,
    backgroundColor: "white",
    fontSize: 18,
    },
    OTPContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
    }


})