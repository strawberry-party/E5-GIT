import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class RoomList extends Component{
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
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 목성</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 수성</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 지구</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 토성</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 천왕성</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 해왕성</Text>
            </CardItem>  
          </Card>
          <Card>
            <CardItem button onPress = {function(){this.props.onPress('READ')}.bind(this)}>
              <Text>대전 -> 명왕성</Text>
            </CardItem>  
          </Card>
        </ScrollView>
      );
    }
  }