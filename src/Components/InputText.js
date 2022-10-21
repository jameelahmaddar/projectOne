//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const InputText = ({
    placeholder
}) => {
    return (
        <View style={{flex:1}}>
            <TextInput style={{flex:1,marginTop:20,backgroundColor:'pink'}} 
            placeholder='title'/>
        </View>
    );
};



//make this component available to the app
export default InputText;
