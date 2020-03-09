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
import { Provider } from 'react-redux'
import store from './store';
// import RoomC from './containers/RoomC';
import Main from './components/Main';

export default class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        {/* <View>
          <Text>
            hello world
          </Text>
        </View> */}
        <Main></Main>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
