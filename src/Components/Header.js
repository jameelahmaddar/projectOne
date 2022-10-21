//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Header = ({title}) => {
    return (
        <View >
            <Text>{title}</Text>
        </View>
    );
};



//make this component available to the app
export default Header;
