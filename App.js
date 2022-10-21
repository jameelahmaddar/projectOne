//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Routes from './src/Screens/Navigation/Routes';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Routes/>
    </SafeAreaView>
  
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex:1
    
   
  },
});

//make this component available to the app
export default App;
