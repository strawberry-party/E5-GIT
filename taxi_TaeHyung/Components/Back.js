import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Back extends Component{
    render(){
        return(
            <Button small onPress={function () {this.props.onPress('MAIN');}.bind(this)}>
                <Text style={{textAlign: 'center'}}>홈</Text>
            </Button>
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