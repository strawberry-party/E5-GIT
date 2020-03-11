import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { connect } from 'react-redux';
import Profile from './components/Profile';
import Home from './components/Home';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';

class App extends Component{
  render(){
    var showBody;
    if(this.props.mode === 'profile') {
      showBody = <Profile></Profile>;
    } else if(this.props.mode === 'home') {
      showBody = <Home></Home>;
    } else if(this.props.mode === 'create') {
      showBody = <CreateRoom></CreateRoom>;
    } else if(this.props.mode === 'read') {
      showBody = <Room></Room>;
    }
    
    return (
      <div>
        <Header />
        {showBody}
      </div>
    )
  }
}

export default connect(
  function(state){
    return{
      mode: state.mode
    }
  }
)(App);
