import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
);