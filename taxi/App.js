/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import Room from './components/Room';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*
import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';

const Stack = createStackNavigator({
  Main:{
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
});


class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Text>Hello world</Text>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Text>Hello world</Text>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

});

export default App;

