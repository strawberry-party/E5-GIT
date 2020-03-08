/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import store from './store.js';

import Room from './components/Room';

class App extends Component{
  render(){
    return(
      <View>
        <Text>카택전에 오신것을 환영합니다</Text>
        <Room></Room>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});

export default App;
