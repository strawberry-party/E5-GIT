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
import Main from './Components/Main';

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
