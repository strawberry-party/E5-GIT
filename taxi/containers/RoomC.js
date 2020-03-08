import React, { Component } from 'react';
import { connect } from 'react-redux';
import Room from '../components/Room';
import {
    View,
    Text
} from 'react-native';

export default connect(
    null,
    function(dispatch){
      return { 
        onClick: function(mode){
            dispatch({type: mode});
        }
      }
    }
  )(Room);