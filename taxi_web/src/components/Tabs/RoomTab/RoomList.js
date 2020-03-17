import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';

class RoomList extends Component {
    render() {
        var roomlist = this.props.rooms.map(function (room) {
            return (
                <Card>
                    <CardHeader title={"출발지: " + room.dep + " 목적지: " + room.dest} subtitle={"작성자: " + room.writer} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        <Button onClick = {function(){
                            this.props.onClick('addMyRoom', room.id);
                        }.bind(this)}>
                            참가
                        </Button>
                        <Button onClick = {function(){
                            this.props.onClick('deleteRoom', room.id);
                        }.bind(this)}>
                            방 삭제
                        </Button>
                    </CardActions>
                    <CardText expandable={true}>{room.desc}</CardText>
                </Card>
            )
        }.bind(this));

        return (
            <MuiThemeProvider>
                {roomlist}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function (state) {
        return {
            rooms: state.rooms,
        }
    },
    function (dispatch) {
        return {
            onClick: function (type, roomId) {
                dispatch({ type, roomId });
            }
        }
    }
)(RoomList);