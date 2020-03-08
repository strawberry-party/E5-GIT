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
import { Provider, connect } from 'react-redux'
import store from './store';
// import RoomC from './containers/RoomC';
import Main from './components/Main';

export default class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <Main></Main>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
