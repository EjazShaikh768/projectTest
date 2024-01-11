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
import LoginScreen from './screen/LoginScreen';
import Registration from './screen/Registration';
import WishScreenBlank from './screen/WishScreenBlank';
import Wishlist from './screen/Wishlist';
import ProdcutAddScreen from './screen/ProdcutAddScreen';




const Stack = createNativeStackNavigator();
const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="WishScreenBlank" component={WishScreenBlank}  options={{ headerShown: false }}  />
      <Stack.Screen name="Wishlist" component={Wishlist}  options={{ headerShown: false }}  />
      <Stack.Screen name="Registration" component={Registration}  options={{ headerShown: false }}  />
      <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="SignInScreen" component={SignInScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="SingleProduct" component={SingleProduct}  options={{ headerShown: false }}  />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="TestScreen" component={TestScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="ProdcutAddScreen" component={ProdcutAddScreen}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})