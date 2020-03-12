import React, { Component } from 'react';
import './App.css';

import MyTab from './components/Tabs/MyTab';
import RoomTab from './components/Tabs/RoomTab';
import Footer from './components/Footer/Footer';
import {
  Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class App extends Component{
  render(){
    return (
        <div>
          <Route exact path="/"><RoomTab></RoomTab></Route>
          <Route exact path="/mytab"><MyTab></MyTab></Route>
      <Footer/>
        {this.props.children}
        </div>
    )
  }
}

export default App;
