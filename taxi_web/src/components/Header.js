import React, { Component } from 'react';
import '../header.css';
import { connect } from 'react-redux';

class Header extends Component{
    render(){
        return (
            <div>
                <div className="logo" onClick = {function(){
                    this.props.onClick('home');
                }.bind(this)}>
                    카택전에 오신 것을 환영합니다!
                </div>
                <div className="profile" onClick = {function(){
                    this.props.onClick('profile');
                }.bind(this)}>
                    내정보
                </div>
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
    }
    )(Header);