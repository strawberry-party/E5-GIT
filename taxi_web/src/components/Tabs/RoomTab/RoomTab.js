import React from 'react';
import RoomList from './RoomList'
import CreateButton from './CreateButton';

const RoomTab = () => {
    return (
        <div>
            <RoomList></RoomList>
            <CreateButton></CreateButton>
        </div>
    );
};

export default RoomTab;