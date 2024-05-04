import { View, Text, ImageBackground, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';



//import { useState } from 'react';

//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Verify() {

export default function Signup_2() {

  const [Username, setName] = useState("");

  //for date picker
  const [open, setOpen]= useState(false);
 //const [OTP, setOTP] = useState('');


  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source= {Background_Image} style = {styles.container}>
    <SafeAreaView style= {styles.container}>
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
      <Text>Let's Verify Your Email</Text>
      <Text>Code is given to your given email</Text>
      {/* inset box for otp*/ }
      {/*<TextInput style= {styles.input} value ={OTP} onChangeText={setOTP} 
        placeholder= "Enter OTP" keyboardType = "numeric"/>*/}

      <Text>Didn't receive code? </Text>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Resend button pressed")}>
      <Text>Resend Code!</Text>
      </TouchableOpacity>

      <Text>Already a member?</Text>

      <TouchableOpacity style= {styles.square_buttons}
      onPress={()=> console.log("Log in button pressed")}>
      <Text>LOG IN</Text>
      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Verify button pressed")}>
      <Text>VERIFY EMAIL</Text>
      </TouchableOpacity>
    

      <Image source={Final_Name_Image}/>
    </ImageBackground>
   </SafeAreaView>

    </SafeAreaView>

  );
}

@@ -73,7 +56,7 @@ const styles = StyleSheet.create({
    borderRadius:99, 

  }, 
  

  input: {
    height: 40,
    margin: 12,
@@ -82,4 +65,5 @@ const styles = StyleSheet.create({
  },



})
 9 changes: 9 additions & 0 deletions9  
package-lock.json
Some generated files are not rendered by default. Learn more about how customized files appear on GitHub.

  1 change: 1 addition & 0 deletions1  
package.json
@@ -9,6 +9,7 @@
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-native-community/datetimepicker": "7.6.1",
    "expo": "~50.0.14",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
  32 changes: 27 additions & 5 deletions32  
screens/ForgotPassword.js
@@ -1,22 +1,36 @@
import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function ForgotPassword() {

  //username declaration
  const [User_Email, setEmail]= useState("");

  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
    <SafeAreaView style ={styles.container}> 
      <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>You'll get new verification in the email address provided</Text>

      <Text>Email Address</Text>
      {/*insert box for user input */}
      <Button title ="SEND CODE" onPress={()=> console.log("Send code button pressed")}/>
    <TextInput style= {styles.input} value ={User_Email} onChangeText={setEmail} 
    placeholder="example@gmail.com" />

      <TouchableOpacity style = {styles.square_buttons} onPress={()=> console.log("Send code button pressed")}>
        <Text>SEND CODE</Text>
      </TouchableOpacity>


      <Image source={Final_Name_Image}/>
    </ImageBackground>
    </SafeAreaView>

  );
}

@@ -31,8 +45,16 @@ const styles = StyleSheet.create({
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 

  }
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1, 
  },


})
  36 changes: 24 additions & 12 deletions36  
screens/Login.js
@@ -1,4 +1,4 @@
import { View, Text, Image, StyleSheet, ImageBackground, Button, StatusBar, SafeAreaView, TextInput} from 'react-native';
import { View, Text, Image, StyleSheet, ImageBackground, Button, TouchableOpacity, StatusBar, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';

@@ -13,7 +13,8 @@ export default function Login() {
  const [User_Password, setPassword] = useState('');

  return (
    <ImageBackground source= {Background_Image} style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ImageBackground source= {Background_Image} style={styles.container}>
      <Image source = {Log_In_Image}/>

      <Text style= {styles.text_style1}>Welcome Back!</Text>
@@ -28,20 +29,29 @@ export default function Login() {
        placeholder= "Enter password" secureTextEntry= {true}/>

      {/* you can create a function and apply it to onPress*/}
      <Button title ="Forgot Password" 
      onPress= {() =>console.log("Forgot Button pressed")}/>

      <Button title = "UNLOCK YOUR PRODUCTIVITY" 
      <TouchableOpacity style ={styles.square_buttons}
      onPress= {() =>console.log("Forgot Button pressed")}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress= {() =>console.log("Unlock Button pressed")} 
      style ={styles.square_buttons}/>
      style ={styles.square_buttons}>
        <Text> UNLOCK YOUR PRODUCTIVITY</Text>
      </TouchableOpacity>


      <Text> Don't have an account?</Text>
      <Button title = "Register Now" 
      onPress= {() =>console.log("Register Button pressed")}/>


      <TouchableOpacity style ={styles.square_buttons}
      onPress= {() =>console.log("Register Button pressed")}>
      <Text>Register Now</Text>
      </TouchableOpacity>

    <Image style = {styles.final}source = {Final_Name_Image}/>

    </ImageBackground>
    </SafeAreaView>

  );
}

@@ -56,8 +66,10 @@ const styles = StyleSheet.create({
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 

  },
  }, 

  input: {
    height: 40,
  38 changes: 30 additions & 8 deletions38  
screens/Resetpassword.js
@@ -1,25 +1,39 @@
import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import { View, Text, ImageBackground, Image, Button, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

//images
const Forgot_Password_Image = require('./assets/forgot_password.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");

export default function Resetpassword
() {
export default function Resetpassword() {
  //declaration of passwords
  const [User_Password, setPassword] = useState('');
  const [User_Confirm_Password, setConPassword] = useState('');

  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
    <SafeAreaView style= {styles.container}>
     <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Forgot_Password_Image}/>
      <Text>Create your new password and don't forget it!</Text>
      <Text>Password</Text>
      {/*Insert box for user input */}
      <TextInput style= {styles.input} value ={User_Password} onChangeText={setPassword} 
        placeholder= "Enter password" secureTextEntry= {true}/>

      <Text>Confirm Password</Text>
      {/*Insert box for user input */}
      <Button title ="SAVE PASSWORD" onPress={()=> console.log("Save password button pressed")}/>
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

@@ -34,8 +48,16 @@ const styles = StyleSheet.create({
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 

  }
  }, 
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1, 
  },


})
  23 changes: 18 additions & 5 deletions23  
screens/Signup.js
@@ -1,4 +1,4 @@
import { View, Text, ImageBackground, Image, Button, StyleSheet, TextInput } from 'react-native';
import { View, Text, ImageBackground, Image, Button, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';

@@ -19,13 +19,15 @@ export default function Signup() {


  return (
    <ImageBackground source= {Background_Image} style = {styles.container}>
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
@@ -34,12 +36,20 @@ export default function Signup() {
      <TextInput style= {styles.input} value ={User_Confirm_Password} onChangeText={setConfirmPassword} 
        placeholder= "Enter new password" secureTextEntry= {true}/>

      <Button title="SEND CODE" onPress={()=> console.log("Send code button pressed")}/>
      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Send code button pressed")}>
        <Text>SEND CODE</Text>
      </TouchableOpacity>

      <Text>Already a member? </Text>
      <Button title="Log In" onPress={()=> console.log("Log In button pressed")}/>

      <TouchableOpacity style ={styles.square_buttons} onPress={()=> console.log("Log In button pressed")}>
        <Text>Log In</Text>
      </TouchableOpacity>

      <Image source={Final_Name_Image}/>
    </ImageBackground>
    </SafeAreaView>

  );
}

@@ -54,8 +64,11 @@ const styles = StyleSheet.create({
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 

  },
  }, 

  input: {
    height: 40,
    margin: 12,
  58 changes: 50 additions & 8 deletions58  
screens/Signup_2.js
@@ -1,31 +1,64 @@
import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native';
import { View, Text, ImageBackground, Platform, Image, Pressable, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';




//images
const Verify_Email_Image = require('./assets/verify_email.png');
const Final_Name_Image = require("./assets/FINAL_NAME.png");
const Background_Image = require("./assets/bg.png");
const Calendar_Image = require("./assets/Calendar.png")


export default function Signup_2() {

  const [Username, setName] = useState("");

  //for date picker





export default function Signup_2
() {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source= {Background_Image} style = {styles.container}>
      <Image source ={Verify_Email_Image}/>
      <Text>Let's Create Your Account</Text>

      <Text> Let's Create Your Account</Text>
      <Text>Creating Reminders Just For You</Text>

      <Text>Username</Text>
      {/*Insert box for user input */}
      <TextInput style = {styles.input} value = {Username} onChangeText = {setName} />

      <Text>Date of Birth</Text>
      {/*Insert date picker for user input */}

      <Image source = {Calendar_Image}/> 


      <Text>By tapping Sign Up, you agree to the terms and condition and
        Privacy Policy of this App
      </Text>

      <Button title="SIGN UP" onPress={()=> console.log("Sign up button pressed")}/>
      <TouchableOpacity style = {styles.square_buttons} 
      onPress={()=> console.log("Sign up button pressed")}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>

      <Text>Already a member?</Text>
      <Button title="LOG IN" onPress={()=> console.log("Log in button pressed")}/>

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
  },

  square_buttons: {
    backgroundColor:'#DCBDFF',
    borderRadius:99, 

  }
  }, 

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1, 
  },


})