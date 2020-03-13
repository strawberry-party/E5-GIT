import React, { Component } from 'react';
import './App.css';
import MyTab from './components/Tabs/MyTab/MyTab';
import RoomTab from './components/Tabs/RoomTab/RoomTab';
import Footer from './components/Footer/Footer';
import { Route, } from "react-router-dom";
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import Profile from './components/Tabs/ProfileTab/ProfileTab';
import CreateRoom from './components/CreateRoom';
import EmptyCard from './components/EmptyCard';
import NoticeTab from './components/Tabs/NoticeTab/NoticeTab';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EmptyCard />
        <Route exact path="/"><RoomTab></RoomTab></Route>
        <Route exact path="/create"><CreateRoom></CreateRoom></Route>
        <Route exact path="/mytab"><MyTab></MyTab></Route>
        <Route exact path="/profile"><Profile></Profile></Route>
        <Route exact path="/notice"><NoticeTab></NoticeTab></Route>
        <EmptyCard />
        <Footer />

      </div>
    )
  }
}

export default connect(
  function (state) {
    return {
      mode: state.mode
    }
  }
)(App);
