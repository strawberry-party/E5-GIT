import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class Rooms extends Component {
  render() {
    var city = this.props.cities;
    var cardlist = [];
    for (var i = 0; i < city.length; i++) {
      var room = this.props.rooms[i];
      cardlist.push(
        <Card key={room.id}>
          <CardItem button onPress={function (e) { 
            this.props.onPress('READ', room.id) }.bind(this)}>
            <Text>대전 -> {city[i]}</Text>
          </CardItem>
        </Card>)
    }
    return (
      <ScrollView>
        {cardlist}
      </ScrollView>
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
)(Rooms);