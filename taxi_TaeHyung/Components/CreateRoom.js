import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Item, Form, Label, Input, Fab } from 'native-base';
import { StyleSheet, View, Text} from 'react-native';

class CreateRoom extends Component {
    render(){
        return(
            <Fab position = 'bottomRight' onPress = {function(){
                    this.props.onPress('CREATE');
            }.bind(this)}>
                <Icon type= "AntDesign" name="plus" />
            </Fab>
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
            onPress: function(mode){
                dispatch({type: mode});
            }
        }
    }
)(CreateRoom)