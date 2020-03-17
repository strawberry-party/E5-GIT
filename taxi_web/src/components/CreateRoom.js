import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, TextField } from 'material-ui';
import { NavLink } from 'react-router-dom'

class CreateRoom extends Component {
    render() {
        var writer, dep, dest, mnum, desc;
        return (
            <MuiThemeProvider>
                <TextField floatingLabelText="작성자" onChange={function (e, text) {
                    writer = text
                }} /><br />
                <TextField floatingLabelText="출발지" onChange={function (e, text) {
                    dep = text
                }} /><br />
                <TextField floatingLabelText="목적지" onChange={function (e, text) {
                    dest = text
                }} /><br />
                <TextField floatingLabelText="추가정보" onChange={function (e, text) {
                    desc = text
                }} /><br />
                <TextField floatingLabelText="최대인원" onChange={function (e, text) {
                    mnum = text
                }} /><br />
                <NavLink exact to={'/'}>
                    <RaisedButton label="방 개설" onClick={function () {
                        if (writer !== undefined && dep !== undefined && dest !== undefined &&mnum!==undefined) {
                            if(desc === undefined){
                                desc = '추가정보 없음';
                            }
                            this.props.onClick('create', writer, dep, dest, desc);
                        } else {
                            window.alert('다시 입력하세요!');
                        }
                    }.bind(this)} />
                </NavLink>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    null,
    function (dispatch) {
        return {
            onClick: function (mode, writer, dep, dest, mnum) {
                dispatch({ type: mode, writer, dep, dest, mnum })
            }
        }
    }
)(CreateRoom);
