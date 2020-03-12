import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    render(){
        return (
            <div>
                <NavLink exact to={'/'} className='logo'>카택전에 오신 것을 환영합니다</NavLink>
                <NavLink exact to={'/profile'} className='profile'>profile</NavLink>
            </div>
        );
    }
};

export default connect(
    null,
    function(dispatch){
        return{
            onClick: function(mode){
                dispatch({type: mode});
            }
        }
    })
(Header);