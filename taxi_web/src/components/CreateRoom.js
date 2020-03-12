import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, TextField } from 'material-ui';

class CreateRoom extends Component {
    render() {
        var writer, dep, dest;
        return (
            <MuiThemeProvider>
                <TextField floatingLabelText="작성자" onChange = {function(e, text){
                    writer = text
                }}/><br />
                <TextField floatingLabelText="출발지" onChange = {function(e, text){
                    dep = text
                }} /><br />
                <TextField floatingLabelText="목적지" onChange = {function(e, text){
                    dest = text
                }} /><br />
                <RaisedButton label="방 개설" onClick = {function(){
                    this.props.onClick('create_process', writer, dep, dest);
                }.bind(this)} />
            </MuiThemeProvider>
        );
    }
}

export default connect(
    null,
    function(dispatch){
        return{
            onClick : function(mode, writer, dep, dest){
                dispatch({type: mode, writer, dep, dest})
            }
        }
    }
)(CreateRoom);