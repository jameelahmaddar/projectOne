//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import styles from './styles';

// create a component
const Login = ({navigation}) => {
    return (
        <View style={{alignItems:'center'}}>
            <View style>
           <Header title="Login"/>

           </View>
           

           <View style={{}}>
           <InputText title="enter details"/>
            <Button title='go back home screen'
            onPress={()=>{navigation.goBack()}}
            />
            </View>
        </View>
    );
};


//make this component available to the app
export default Login;
