import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Login
() {
  const [User_Name, setName]= useState('');
  const [User_Password, setPassword] = useState('');

  const navigation = useNavigation();
  
  return (
   <SafeAreaView style= {{flex: 1}}>
    <ImageBackground source = {require("./assets/bg.png")} style= {{flex: 1}}>
    <View style= {styles.container}>
      <Image style = {styles.header_image}source = {require("./assets/log_in.png")}/>
    </View>

    <View style= {{alignItems: 'center'}}>
      <Text style= {styles.title_text}> Welcome Back!</Text>
      <Text style= {styles.subtitle_text}> Create Reminders For You.</Text>
    </View>

    <View style = {{padding:30}}>
      <Text style= {styles.input_title}>USERNAME</Text>
      <TextInput style= {styles.input}value ={User_Name} onChangeText={setName} placeholder='Enter your Username'/>
      
      <Text style= {styles.input_title}>PASSWORD</Text>
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter your Password" secureTextEntry= {true}/>
    </View>

      <View style={styles.Forgot_Style}> 
        <TouchableOpacity onPress = {() => console.log("Pressed")}>
          <Text style ={styles.Forgot_Text_Style}>Forgot Password?</Text></TouchableOpacity>

      </View>
  
    <View style ={{alignItems: 'center'}}>
    <TouchableOpacity 
      style ={styles.main_buttons}>
    <Text style= {styles.Button_Text}> UNLOCK YOUR PRODUCTIVITY</Text>
    </TouchableOpacity>
    </View>
  
    
    
    <View style = {styles.Register_Style}>    
    <Text style= {{color:'#727272', fontSize: 11}}> Don't have an account?</Text>
      <TouchableOpacity onPress= {() => navigation.navigate('Signup')}> 
      <Text style = {{fontSize: 11}}>Register Now</Text>
      </TouchableOpacity>
    </View>
 
    <View style = {{alignItems: 'center'}}>
      <Image source = {require("./assets/footerName.png")} style = {styles.footer_style}/>
    </View>

    </ImageBackground>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
  },
  header_image:{
    marginTop: 50,
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
  Forgot_Style: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 30,
      top: -50,
      
     },
  Forgot_Text_Style:{
    color: '#908D8D',
    fontSize: 12,
  }, 
  main_buttons:{
    backgroundColor:'#DCBDFF',
    borderRadius:10, 
    height: 40, 
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Button_Text:{
    color: '#112C41',
    fontWeight: 'bold',
  },
  Register_Style:{
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
}

)