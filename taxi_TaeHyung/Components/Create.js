import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Item, Form, Label, Input, View } from 'native-base';
import Back from './Back';
import { TextInput, Text } from 'react-native';

class Create extends Component {
    render(){
        var dep, dest;
        return(
            <View>
                <TextInput placeholder = "출발지" onChangeText = {function(text){
                    dep = text;
                }.bind(this)}></TextInput>
                <TextInput placeholder = "목적지" onChangeText = {function(text){
                    dest = text;
                }.bind(this)}></TextInput>
                <Button onPress = {function(){
                    this.props.onPress(dep, dest);
                }.bind(this)}>
                    <Text>개설</Text>
                </Button>
            </View>
            
        )
    }
}

export default connect(
    function(state){
        return{
            numOfRooms: state.max_id
        }
    },
    function(dispatch){
        return{
            onPress: function(dep, dest){
                dispatch({type: 'CREATE_PROCESS', dep, dest});
            }
        }
    }
)(Create)