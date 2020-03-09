import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import RoomC from '../containers/RoomC';

class Main extends Component {
    render() {
        var body = null;
        if (this.props.mode === 'READ') {
            body =
                <View>
                    <Text>READ</Text>
                    <Card>
                        <CardItem button onPress = {function(){
                            this.props.onPress('MAIN');
                        }.bind(this)}>
                            <Text>홈 화면</Text>
                        </CardItem>
                    </Card>
                </View>;
        } else if (this.props.mode === 'MAIN') {
            body =
                <View>
                    <RoomC></RoomC>
                </View>;
        }
        return (
            <View>
                <Text>카택전에 오신것을 환영합니다!</Text>
                {body}
            </View>
        )
    }
}

export default connect(
    function (state) {
        return {
            mode: state.mode
        }
    },
    function (dispatch) {
        return {
            onPress: function (mode) {
                dispatch({ type: mode })
            }
        }
    }
)(Main);