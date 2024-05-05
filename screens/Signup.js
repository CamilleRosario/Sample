import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { useState } from 'react';

export default function Signup() {

  const [Email,setEmail]= useState('');
  const [Password, setPassword] = useState("");
  const [Confirm_Password, setConfirmPassword] = useState("");

  return (
   <SafeAreaView style= {{flex: 1}}>
    <ImageBackground source= {require('./assets/bg.png')} style={{flex:1}}>
    <View style= {styles.container}>
      <Image style = {styles.header_image}source = {require('./assets/sign_up.png')}/>
    </View>

     <View style= {{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
     <Text style= {styles.title_text}> Let's Create Your Account</Text>
      <Text style= {styles.subtitle_text}> Create Reminders For You.</Text>
     </View>

     <View style = {{paddingLeft:30, paddingRight: 30}}>
      <Text style= {styles.input_title}>EMAIL</Text>
      <TextInput style= {styles.input}value ={Email} onChangeText={setEmail} placeholder='example@gmail.com'/>
      
      <Text style= {styles.input_title}>PASSWORD</Text>
      <TextInput style= {styles.input} value ={Password} onChangeText={setPassword} 
        placeholder= "Enter your Password" secureTextEntry= {true}/>
      
      <Text style= {styles.input_title}>CONFIRM  PASSWORD</Text>
      <TextInput style= {styles.input} value ={Confirm_Password} onChangeText={setConfirmPassword} 
        placeholder= "Re-enter your Password" secureTextEntry= {true}/>
      </View>

      <View style ={{alignItems: 'center'}}>
      <TouchableOpacity onPress= {() =>console.log("Send Code Button pressed")} 
      style ={styles.main_buttons}>
      <Text style= {styles.Button_Text}> SEND CODE</Text>
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
    justifyContent:'center'
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