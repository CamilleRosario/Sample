import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import React from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Resetpassword
() {
  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>Create your new password and don't forget it!</Text>
      <Text>Password</Text>
      {/*Insert box for user input */}
      <Text>Confirm Password</Text>
      {/*Insert box for user input */}
      <Button title ="SAVE PASSWORD" onPress={()=> console.log("Save password button pressed")}/>

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