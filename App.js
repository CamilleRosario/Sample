import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';


export default function App() {

  const [Username, setName] =useState('');

  return (
    <SafeAreaView style= {{flex:1}}>
      <ImageBackground source= {require('./assets/bg.png')} style= {{flex:1}}>

      <View style= {styles.container}>
      <Image style = {styles.header_image} source= {require('./assets/sign_up.png')}/>
      </View>

      <View style= {{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
     <Text style= {styles.title_text}> Let's Create Your Account</Text>
      <Text style= {styles.subtitle_text}> Create Reminders For You.</Text>
     </View>

     <View style = {{paddingLeft:30, paddingRight: 30}}>
      <Text style= {styles.input_title}>USERNAME</Text>
      <TextInput style= {styles.input}value ={Username} onChangeText={setName} placeholder='Enter your Username...'/>
      </View>

      <View style = {{paddingLeft:30, paddingRight: 30}}>
      <Text style= {styles.input_title}>DATE OF BIRTH</Text>
      
      </View>
     

     
     <View style = {styles.Tapping_text}>
     <Text style= {{textAlign: 'center',color:'#727272', fontSize: 11}}> By tapping Sign up You agree to the Terms & Conditions 
     and Privacy Policy of this App!</Text>
     </View>

     <View style ={{alignItems: 'center', marginTop: 30}}>
      <TouchableOpacity onPress= {() =>console.log("Sign up Button pressed")} 
      style ={styles.main_buttons}>
      <Text style= {styles.Button_Text}> SIGN UP</Text>
      </TouchableOpacity>
      </View>


     <View style = {styles.Login_Style}>    
    <Text style= {{color:'#727272', fontSize: 11}}> Already a member?</Text>
      <TouchableOpacity onPress= {() =>console.log("login Button pressed")}> 
      <Text style = {{fontSize: 11}}>Log in!
      </Text>
      </TouchableOpacity>
    </View>

    <View style = {{alignItems: 'center'}}>
      <Image source = {require('./assets/footerName.png')} style = {styles.footer_style}/>
    </View>

      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Tapping_text:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
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
  input_title: {
    fontWeight: 'bold',
    fontSize: 13,
    color: "#545454",
  },
  input: {
    height: 40, 
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#fff',
    fontWeight:'bold',
    marginBottom: 30,
  },
  header_image:{
    marginTop: 50,
    width: 220,
    height: 210,
  },
  main_buttons:{
    backgroundColor:'#DCBDFF',
    borderRadius:10, 
    height: 40, 
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    Top: -5,
  },
  Button_Text:{
    color: '#112C41',
    fontWeight: 'bold',
  },
  Login_Style:{
    color: '#908D8D',
    marginBottom: 1,
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
 
   },
   footer_style: {
     width: 250,
     height:40,
     marginTop:40,
 
   },
})