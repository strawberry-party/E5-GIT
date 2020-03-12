import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class RoomList extends Component {
    render() {
        var roomlist = this.props.rooms.map(function(room){
            return(
                <ListItem onClick = {function(){
                    this.props.onClick('read', room.id);
                }.bind(this)}>
                    작성자 : {room.writer} 출발지 : {room.dep} 목적지 : {room.dest}
                </ListItem>
            )
        }.bind(this));
            
        return (
            <MuiThemeProvider>
                <List>
                    {roomlist}
                </List>
            </MuiThemeProvider>  
        );
    }
}

export default connect(
    function(state){
        return {
            rooms: state.rooms,
            selectedId:  state.selectedId
        }
    },
    function(dispatch){
        return{
            onClick: function(mode, id){
                dispatch({type: mode, id});
            }
        }
    }
)(RoomList);