import React from 'react';
import MyRoomList from './MyRoomList';

const MyTab = () => {
    console.log("MyTab 실행됨")
    return (
        <div>
            내가 참여한 방 목록
            <MyRoomList></MyRoomList>
        </div>
    );
};

export default MyTab;