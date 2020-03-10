import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Room extends Component {
    render() {
        var rooms = this.props.rooms;
        var dep, dest, id;
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].id === this.props.selected_id) {
                id = rooms[i].id
                dep = rooms[i].dep;
                dest = rooms[i].dest;
            }
        }
        return (
            <View>
                <Text>{id}번째 방</Text>
                <Text>{dep} -> {dest}</Text>
            </View>
        );
    }
}

export default connect(
    function (state) {
        return {
            rooms: state.rooms,
            selected_id: state.selected_id,
            mode: state.mode
        }
    },
    function (dispatch) {
        return {
            onPress: function (mode) {
                dispatch({ type: mode })
            }
        }
    })(Room);

const styles = StyleSheet.create({
    roomList: {
        flex: 3
    }
});