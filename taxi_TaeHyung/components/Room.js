import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class Room extends Component{
    render(){
      return (
        <ScrollView>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 서울</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 부산</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 대구</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 뉴욕</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 시드니</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 우한</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 화성</Text>
            </CardItem>  
          </Card>
        </ScrollView>
      );
    }
  }