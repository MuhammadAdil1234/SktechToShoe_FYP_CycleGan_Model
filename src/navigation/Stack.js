import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Signup from '../screens/signup/Signup';
import Signin from '../screens/signin/Signin';
import MainPage from '../screens/main/main';
import Drawers from './drawer';

const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Drawers" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
