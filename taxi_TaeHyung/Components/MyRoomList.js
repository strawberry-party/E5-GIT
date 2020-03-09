import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class MyRoomList extends Component {
    render() {
        var city = this.props.cities;
        var myRooms = [];
        for(var i = 0; i < city.length; i++){
            myRooms.push(
                <Card>
                    <CardItem>
                        <Text>
                            {city[i]}
                        </Text>
                    </CardItem>
                </Card>)
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
            cities: state.cities
        }
    }
)(MyRoomList);

const styles = StyleSheet.create({
    myRoom: {
        flex: 1
    }
});