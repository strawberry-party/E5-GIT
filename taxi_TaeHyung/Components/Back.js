import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Fab } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Back extends Component{
    render(){
        return(
            <Fab position = 'bottomRight' onPress = {function(){this.props.onPress('MAIN');}.bind(this)}>
                <Icon name="home"/>
            </Fab>
        )
    }
}

export default connect(
    null,
    function(dispatch){
        return{
            onPress: function(mode){
                dispatch({type: mode});
            }
        }
    }
)(Back)