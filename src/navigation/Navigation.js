import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInWelcomeScreen from '../screens/authscreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authscreens/SignInScreen';
import ForgotPasswordScreen from '../screens/authscreens/ForgotPasswordScreen';
import CreateAccountScreen from '../screens/authscreens/CreateAccountScreen';
import HomePageScreen from '../screens/authscreens/HomePageScreen';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInWelcomeScreen"component={SignInWelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
