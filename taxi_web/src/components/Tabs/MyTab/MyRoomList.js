import React, { Component } from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class MyRoomList extends Component {
    render() {
        var myRoomList = this.props.myRooms.map(function (myRoom) {
            return (
                <Card>
                    <CardHeader title={"출발지: " + myRoom.dep + " 목적지: " + myRoom.dest} subtitle={"작성자: " + myRoom.writer} actAsExpander={true} showExpandableButton={true} />
                    {/* <CardActions>
                        <FlatButton label="방 나가기" onClick = {function(){
                            this.props.onClick('addMyRoom', room.id);
                        }.bind(this)}/>
                    </CardActions> */}
                    <CardText expandable={true}>추가정보</CardText>
                </Card>
            )
        }.bind(this));
        return (
            <MuiThemeProvider>
                {myRoomList}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function(state){
        return{
            myRooms: state.myRooms
        }
    }
)(MyRoomList);