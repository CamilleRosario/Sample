import { View, Text, Image, StyleSheet, ImageBackground, Button, TouchableOpacity, StatusBar, SafeAreaView, TextInput} from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <ImageBackground source= {Background_Image} style={styles.container}>
      <Image style = {styles.Header_Image} source = {Log_In_Image}/>

      <Text style= {styles.title_text}>Welcome Back!</Text>
      <Text style= {styles.subtitle_text}>Creating Reminders For You</Text>

      <Text style= {styles.input_title}>USERNAME</Text>
      <TextInput style= {styles.input} value ={User_Name} onChangeText={setName} placeholder='Enter your Username' />


      <Text style = {styles.input_title}>PASSWORD</Text>
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter your Password" secureTextEntry= {true}/>
        
      {/* you can create a function and apply it to onPress*/}
      <TouchableOpacity style ={styles.Forgot_button}
      onPress= {() =>console.log("Forgot Button pressed")}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
      onPress= {() =>console.log("Unlock Button pressed")} 
      style ={styles.main_buttons}>
        <Text> UNLOCK YOUR PRODUCTIVITY</Text>
      </TouchableOpacity>
      

      <Text> Don't have an account?</Text>
      
      <TouchableOpacity style ={styles.register_button}
      onPress= {() =>console.log("Register Button pressed")}>
      <Text>Register Now</Text>
      </TouchableOpacity>
      
    <Image style = {styles.final}source = {Final_Name_Image}/>
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

  main_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 
    height: 40, 
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  input: {
    height: 40, 
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#fff',
    fontWeight:'bold',
  },
  input_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 13,
    color: "#545454",
    marginTop:20,
  },
  register_button: {
    height: 40, 
    width: 100,
    alignItems: 'flex-end',
    marginTop: 50,
  },
  Header_Image: {
    width: 220,
    height: 210,
  },
  title_text:{
    fontSize: 24,
    fontWeight: 'bold',
    color: "#3D405B",
  },
  subtitle_text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: "#545454",
    marginBottom: 10,
   },



})