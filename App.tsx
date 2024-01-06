import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import TestScreen from './screen/TestScreen';
import SignInScreen from './screen/SignInScreen';
import SignUpScreen from './screen/SignUpScreen';
import SingleProduct from './screen/SingleProduct';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();
const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SingleProduct" component={SingleProduct}  options={{ headerShown: false }}  />
      <Stack.Screen name="SignInScreen" component={SignInScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="TestScreen" component={TestScreen}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})