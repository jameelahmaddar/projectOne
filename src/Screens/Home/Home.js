//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import styles from './styles';

// create a component
const Home = ({navigation}) => {
    return (
        <View style={styles.headerstyle}>
            <View style={styles.headerView}>
            <Header title="MY to do"  to do/>

            
          
            </View>
             <View style={{flex:1,height:10,}}>
             <InputText />
            <Button title='go to Login screen'
            onPress={() => navigation.navigate('Login')}/>
        </View>
        </View>
    );
};


//make this component available to the app
export default Home;
