import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { useState } from 'react';
import style from 'react-native-datepicker/style';

export default function App() {
  const [OTP, setOTP] = useState([" ", " ", " ", " ", " ", " "] );
  return (
   <SafeAreaView style= {{flex:1}}>
    <ImageBackground source ={require("./assets/bg.png")} style= {{flex:1}}>
 
    <View style= {styles.container}>
    <Image source={require("./assets/verify_email.png")} style= {styles.header_image}/>
    </View>

    <View style= {{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
    <Text style= {styles.title_text}>Let's Verify Your Email</Text>
    <Text style= {styles.subtitle_text}>Code is given to your given email</Text>
    </View> 

    <View style= {styles.OTPContainer}>
     {OTP.map ((value, index) => (
        <TextInput
          key={index}
          style ={styles.otpInput}
          maxLength={1}
          keyboardType='numeric'
        />
      ))}
     </View>

     <View style = {styles.Login_Style}>    
    <Text style= {{color:'#727272', fontSize: 11}}> You didn't receive a code?</Text>
      <TouchableOpacity onPress= {() =>console.log("Register Button pressed")}> 
      <Text style = {{fontSize: 11}}>Resend code</Text>
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
 
  
  header_image:{
    marginTop: 100,
    width: 210,
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
   otpInput: {
    height:40, 
    width: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: "center",
    margin: 5,
    backgroundColor: "white",
    fontSize: 18,
    },
    OTPContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
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
      marginTop:150,
  
    },
  

})