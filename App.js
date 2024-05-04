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
      <View style ={styles.Forgot_button}> 
        <TouchableOpacity 
        onPress= {() =>console.log("Forgot Button pressed")}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
     
      <TouchableOpacity
      onPress= {() =>console.log("Unlock Button pressed")} 
      style ={styles.main_buttons}>
        <Text> UNLOCK YOUR PRODUCTIVITY</Text>
      </TouchableOpacity>
      


      
      <Text style = {styles.Dont_text_style}> Don't have an account?</Text>
      
      <View style = {styles.register_button}> 
      <TouchableOpacity
        onPress= {() =>console.log("Register Button pressed")}>
      <Text>Register Now</Text>

      </TouchableOpacity> 
      </View>
     
      
      <View style={styles.final}>
      <Image style={{ flex: 1, aspectRatio: 1 }} source={Final_Name_Image}/>
      </View>
    
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
   paddingLeft:188,
   marginTop: -20,
    
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
   Forgot_button:{
    alignItems: 'flex-end',
    paddingLeft: 180,
    paddingBottom: 10,
   },
   Dont_text_style: {
    paddingTop: 50,
    marginRight: 60,
  
},
final: {
  flex:1,
width: 300,
height: 90,
marginTop: 40,


}}
)