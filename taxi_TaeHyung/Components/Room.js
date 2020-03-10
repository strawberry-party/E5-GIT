import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Back from './Back';

class Room extends Component {
    render() {
        var rooms = this.props.rooms;
        var dep = null;
        var dest = null;
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].id === this.props.selected_id) {
                dep = rooms[i].dep;
                dest = rooms[i].dest;
            }
        }
        return (
            <View>
                <Text>
                    {dep} -> {dest}
                </Text>
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