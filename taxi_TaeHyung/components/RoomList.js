import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class RoomList extends Component {
  render() {
    var rooms = this.props.rooms;
    var cardlist = rooms.map(function(room){
      return (
        <Card key = {room.id}>
          <CardItem button onPress = {function(){
            this.props.onPress('READ', room.id)
          }.bind(this)}>
            <Text>{room.dep} -> {room.dest}</Text>
          </CardItem>
        </Card>
      )
    }.bind(this));
    return (
      <View style={styles.roomList}>
        <Text style={{textAlign: 'center'}}>현재 개설된 방들</Text>
        <ScrollView>
          {cardlist}
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  function(state) {
    return {
      cities: state.cities,
      rooms: state.rooms
    }
  },
  function (dispatch) {
    return {
      onPress: function (mode, id) {
        dispatch({ type: mode, id: id });
      }
    }
  }
)(RoomList);

const styles = StyleSheet.create({
  roomList: {
      flex: 3
  }
});

