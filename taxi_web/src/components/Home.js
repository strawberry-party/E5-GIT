import React, { Component } from 'react';
import CreateButton from './CreateButton';
import RoomList from './RoomList';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>내 방 목록</h1>
                <RoomList></RoomList>
                <CreateButton></CreateButton>
            </div>
        );
    }
}

export default Home;