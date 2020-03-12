import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateButton from './CreateButton';

class Room extends Component {
    render() {
        var rooms = this.props.rooms;
        var writer, dep, dest;
        for(var i = 0; i < rooms.length; i++){
            var room = rooms[i]
            if(room.id === this.props.selectedId){
                writer = room.writer;
                dep = room.dep;
                dest = room.dest;
                break;
            }
        }
        return (
            <div>
                <p>작성자 : {writer}</p>
                <p>출발지 : {dep}</p>
                <p>목적지 : {dest}</p>
                <CreateButton />
            </div>
        );
    }
}

export default connect(
    function(state){
        return{
            rooms: state.rooms,
            selectedId: state.selectedId
        }
    }
)(Room);