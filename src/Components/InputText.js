//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const InputText = ({Title}) => {
    return (
        <View >
            <TextInput style={{backgroundColor:"pink",borderRadius:15,height:50,width:350,marginBottom:20}} 
            placeholder={Title}/>
        </View>
    );
};



//make this component available to the app
export default InputText;
