import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import RoomList from './RoomList';
import MyRoomList from './MyRoomList';

export default class Main extends Component {
    render() {
        return (
            <View>
                <Text>카택전에 오신것을 환영합니다!</Text>
                <MyRoomList></MyRoomList>
                <RoomList></RoomList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    }
});