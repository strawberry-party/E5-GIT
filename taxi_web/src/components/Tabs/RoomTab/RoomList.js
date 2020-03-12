import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class RoomList extends Component {
    render() {
        var roomlist = this.props.rooms.map(function(room){
            return(
                <Card>
                    <CardHeader title = {"출발지: "+room.dep+" 목적지: "+room.dest} subtitle={"작성자: "+room.writer} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        <FlatButton label="참가" />
                    </CardActions>
                    <CardText expandable={true}>추가정보</CardText>
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