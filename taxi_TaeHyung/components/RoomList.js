import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Rooms from './Rooms';
import { connect } from 'react-redux';

class RoomList extends Component{
    render(){
        var body = null;
        var rooms = this.props.rooms;
        var dep = null;
        var dest = null;
        if (this.props.mode === 'READ') {
            for(var i = 0; i < rooms.length; i++){
                if(rooms[i].id === this.props.selected_id) {
                    dep = rooms[i].dep;
                    dest = rooms[i].dest;
                }
            }
            body =
                <View>
                    <Text>
                        {dep} -> {dest}
                    </Text>
                    <Button small onPress = {function(){
                        this.props.onPress('MAIN');
                    }.bind(this)}>
                        <Text>홈 화면</Text>
                    </Button>
                </View>;
        } else if (this.props.mode === 'MAIN') {
            body =
                <View>
                    <Rooms></Rooms>
                </View>;
        }
        return(
            <View>
                {body}
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
})(RoomList);
    
const styles = StyleSheet.create({
    roomList: {
        flex: 3
    }
});