import { View, Text, Image, StyleSheet, ImageBackground, Button, StatusBar, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Log_In_Image = require("./assets/log_in.png");
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Login() {
  //User name and password declaration
  const [User_Name, setName]= useState("");
  const [User_Password, setPassword] = useState('');

  return (
    <ImageBackground source= {Background_Image} style={styles.container}>
      <Image source = {Log_In_Image}/>

      <Text style= {styles.text_style1}>Welcome Back!</Text>
      <Text style= {styles.text_style1}>Creating Reminders For You</Text>

      <Text style= {styles.text_style2}>Username</Text>
      <TextInput style= {styles.input} value ={User_Name} onChangeText={setName} />


      <Text>Password</Text>
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter password" secureTextEntry= {true}/>
        
      {/* you can create a function and apply it to onPress*/}
      <Button title ="Forgot Password" 
      onPress= {() =>console.log("Forgot Button pressed")}/>

      <Button title = "UNLOCK YOUR PRODUCTIVITY" 
      onPress= {() =>console.log("Unlock Button pressed")} 
      style ={styles.square_buttons}/>

      <Text> Don't have an account?</Text>
      <Button title = "Register Now" 
      onPress= {() =>console.log("Register Button pressed")}/>

    <Image style = {styles.final}source = {Final_Name_Image}/>

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

  text_style1:{
    fontSize: 25,
    padding: 15,
  },

  text_style2:{
    fontSize: 15,
    padding: 2,
  }



})