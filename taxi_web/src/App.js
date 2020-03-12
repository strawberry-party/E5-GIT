import React, { Component } from 'react';
import './App.css';
import MyTab from './components/Tabs/MyTab/MyTab';
import RoomTab from './components/Tabs/RoomTab/RoomTab';
import Footer from './components/Footer/Footer';
import {Route,} from "react-router-dom";
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import Profile from './components/Tabs/ProfileTab/ProfileTab';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';

class App extends Component{
  render(){
    var showBody;
    if (this.props.mode === 'create') {
      showBody = <CreateRoom></CreateRoom>;
    }
    else if (this.props.mode === 'read') {
      showBody = <Room></Room>;
    }
    return (
      <div>
        <Header />
      <div>
        <Route exact path="/">
          {showBody}
          <RoomTab></RoomTab>
        </Route>
        <Route exact path="/mytab"><MyTab></MyTab></Route>
        <Route exact path="/profile"><Profile></Profile></Route>

        <Footer/>
        {/* {this.props.children} */}
      </div>
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
