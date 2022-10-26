//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import styles from './styles';

// create a component
const Login = ({navigation}) => {
    return (
        <View style={{flex:1,alignItems:'center',marginTop:15}}>
        
           <Header title="Login"/>
           <View style={{flex:1,height:10,marginTop:15}}>
           <InputText Title="Enter name"
           
           
           
           
           
           />
           <InputText Title="Enter your details"/>
            <Button title='go back home screen'
            onPress={()=>{navigation.goBack()}}
            />
            </View>
        </View>
    );
};


//make this component available to the app
export default Login;
