import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Resetpassword() {
  //declaration of passwords
  const [User_Password, setPassword] = useState('');
  const [User_Confirm_Password, setConPassword] = useState('');

  return (
    <SafeAreaView style= {styles.container}>
     <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>Create your new password and don't forget it!</Text>
      <Text>Password</Text>
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter password" secureTextEntry= {true}/>

      <Text>Confirm Password</Text>
      <TextInput style= {styles.input} value ={User_Confirm_Password} onChangeText={setConPassword} 
        placeholder= "Enter new password" secureTextEntry= {true}/>

      <TouchableOpacity style= {styles.square_buttons} 
      onPress={()=> console.log("Save password button pressed")}>
      <Text> SAVE PASSWORD</Text>
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