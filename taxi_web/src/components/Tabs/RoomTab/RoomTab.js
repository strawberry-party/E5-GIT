import React from 'react';
import RoomList from './RoomList'
import CreateButton from './CreateButton';

const RoomTab = () => {
    return (
        <div>
            방 목록
            <RoomList></RoomList>
            <CreateButton></CreateButton>
        </div>
    );
};

export default RoomTab;