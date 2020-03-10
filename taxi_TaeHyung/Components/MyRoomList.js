import React, { Component, version } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class MyRoomList extends Component {
    render() {
        var rooms = this.props.rooms;
        var myRooms = [];
        for(var i = 0; i < rooms.length; i++){
            myRooms.push(
                <Button key = {rooms[i].id} style = {{width: 60}}>
                    <Text>
                        {rooms[i].dest}
                    </Text>
                </Button>
            )
        }
        
        return (
            <View style={styles.myRoomList} >
                <Text style={{textAlign: 'center'}}>내 방들</Text>
                <ScrollView horizontal>
                    {myRooms}
                </ScrollView>
            </View>
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

const styles = StyleSheet.create({
    myRoomList: {
        flex: 1
    }
  });
  