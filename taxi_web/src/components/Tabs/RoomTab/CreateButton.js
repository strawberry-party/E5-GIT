import React, { Component } from 'react';
import { connect } from 'react-redux';
import './button.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavLink } from 'react-router-dom'

class CreateButton extends Component {
    render() {
        return (
            <NavLink exact to={'create'}>
                <MuiThemeProvider>
                    <FloatingActionButton >
                        <ContentAdd />
                    </FloatingActionButton>
                </MuiThemeProvider>
            </NavLink>

        );
    }
}

export default connect(
    null,
    function (dispatch) {
        return {
            onClick: function (mode) {
                dispatch({ type: mode });
            }
        }
    }
)(CreateButton);