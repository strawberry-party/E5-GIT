import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class Room extends Component{
    render(){
      return (
        <Card>
          <CardItem button onPress = {function(){
            this.props.onPress('READ');
          }.bind(this)}>
            <Text>This is button</Text>
          
          </CardItem>  
        </Card>
      );
    }
  }