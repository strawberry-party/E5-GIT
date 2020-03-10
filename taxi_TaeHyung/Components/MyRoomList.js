import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class MyRoomList extends Component {
    render() {
        var rooms = this.props.rooms;
        var myRooms = [];
        for(var i = 0; i < rooms.length; i++){
            myRooms.push(
                <Button style = {{width: 60}}>
                    <Text>
                        {rooms[i].dest}
                    </Text>
                </Button>
            )
        }
        
        return (
            <ScrollView horizontal='true'>
                {myRooms}
            </ScrollView>
        );
    }
}

export default connect(
    function(state) {
        return {
            rooms: state.rooms
        }
    }
)(MyRoomList);
