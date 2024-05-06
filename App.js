import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Signup_2 from './screens/Signup_2';
import Verify from './screens/Verify';
import Resetpassword from './screens/Resetpassword';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function App( navigation) {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
            <Stack.Screen name='LogIn' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Signup' component={Signup_2}/>
            <Stack.Screen name='Signup' component={Verify}/>
            <Stack.Screen name='Signup' component={Resetpassword}/>
            <Stack.Screen name='Signup' component={ForgotPassword}/>
    </NavigationContainer>
  )
}