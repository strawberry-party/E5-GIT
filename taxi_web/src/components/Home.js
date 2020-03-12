import React, { Component } from 'react';
import CreateButton from './Tabs/RoomTab/CreateButton';
import RoomList from './Tabs/RoomTab/RoomList';

class Home extends Component {
    render() {
        return (
            <div>
                <CreateButton></CreateButton>
            </div>
        );
    }
}

export default Home;