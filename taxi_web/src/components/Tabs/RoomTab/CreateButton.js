import React, { Component } from 'react';
import { connect } from 'react-redux';
import './button.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CreateButton extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <FloatingActionButton onClick = {function(){
                    this.props.onClick('create');
                }.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    null,
    function(dispatch){
        return{
            onClick : function(mode){
                dispatch({type: mode});
            }
        }
    }
)(CreateButton);