import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';




//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");


export default function Signup_2() {

  const [Username, setName] = useState("");
  
  //for date picker
  const [open, setOpen]= useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>

      <Text> Let's Create Your Account</Text>
      <Text>Creating Reminders Just For You</Text>

      <Text>Username</Text>
      <TextInput style = {styles.input} value = {Username} onChangeText = {setName} />

      <Text>Date of Birth</Text>
      {/*Insert date picker for user input */}
       <TouchableOpacity>
        
       </TouchableOpacity>
        
      
      <Text>By tapping Sign Up, you agree to the terms and condition and
        Privacy Policy of this App
      </Text>

      <TouchableOpacity style = {styles.square_buttons} 
      onPress={()=> console.log("Sign up button pressed")}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>
     
      <Text>Already a member?</Text>

      <TouchableOpacity style= {styles.square_buttons}
      onPress={()=> console.log("Log in button pressed")}>
      <Text>LOG IN</Text>
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