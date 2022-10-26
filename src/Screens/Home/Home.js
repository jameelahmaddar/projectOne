//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import styles from './styles';

// create a component
const Home = ({navigation}) => {
    return (
        
            <View style={{flex:1,alignItems:'center',marginTop:15}}>
            <Header title="MY to do"  to do/>
            
             <View style={{flex:1,height:10,}}>
             <InputText Title="Enter your name "/>
             <InputText Title="Enter details"/>
            <Button title='go to Login screen'
            onPress={() => navigation.navigate('Login',{Title:"xyz"})}
            />
        </View> 
        </View> );
};


//make this component available to the app
export default Home;
