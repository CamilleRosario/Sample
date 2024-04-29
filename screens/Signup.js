import { View, Text, ImageBackground, Image, Button, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Sign_Up_Image = require('./assets/sign_up.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Signup() {

  //Email and password declaration
  const [User_Email, setEmail]= useState("");
  const [User_Password, setPassword] = useState("");
  const [User_Confirm_Password, setConfirmPassword] = useState("");
  

  //Need to add validation for confirm password


  return (
    <SafeAreaView style ={styles.container}>
      <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Sign_Up_Image}/>
      <Text>Let's create your account</Text>
      <Text>Creating Reminders Just For You</Text>

      <Text>Email Address</Text>
      <TextInput style = {styles.input} value = {User_Email} onChangeText={setEmail}/>
      
      <Text>Password</Text>
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter password" secureTextEntry= {true}/>

      <Text>Confirm Password</Text>
      <TextInput style= {styles.input} value ={User_Confirm_Password} onChangeText={setConfirmPassword} 
        placeholder= "Enter new password" secureTextEntry= {true}/>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Send code button pressed")}>
        <Text>SEND CODE</Text>
      </TouchableOpacity>

      <Text>Already a member? </Text>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Log In button pressed")}>
        <Text>Log In</Text>
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