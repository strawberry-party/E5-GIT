import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Main extends Component{
    render(){
        var body = null;
            if (this.props.mode === 'READ'){
                body = <View><Text>READ</Text></View>
            } else if (this.props.mode === 'MAIN'){
                body = 
                <View>
                    <Text>카택전에 오신것을 환영합니다</Text>
                    <RoomC></RoomC>
                </View>
            }
        return(
            <View>
                {body}
            </View>
        )
    }
}