//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Login from '../Login/Login';

const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );

};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
});

//make this component available to the app
export default Routes;
