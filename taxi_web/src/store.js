import React, { Component } from 'react';
import { createStore } from 'redux';

var initstate = {
    mode: 'home',
    rooms: [
        { id: 1, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
        { id: 2, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
        { id: 3, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
        { id: 4, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
        { id: 5, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
        { id: 6, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음' },
    ],
    maxId: 6,
    myRooms: [],
    notices: [
        { id: 1, title: '중요공지', desc: '카택전 v0.1 런칭' }
    ]

}

function reducer(state = initstate, action) {
    var newState;
    if (action.type === 'create_process') {
        var currentMaxId = state.rooms.length;
        var newId = currentMaxId + 1;
        var newRooms = [...state.rooms, { id: newId, writer: action.writer, dep: action.dep, dest: action.dest, desc: action.desc }];
        newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId };
        return newState;
    }
    if (action.type === 'addMyRoom') {
        var room = state.rooms[action.roomId - 1];
        var newMyRooms = [...state.myRooms, room];
        newState = { ...state, myRooms: newMyRooms };
        return newState;
    }
    
    if (action.type === 'deleteRoom') {
        newRooms = state.rooms.filter(function(room){
            if(room.id === action.roomId){
                return false;
            }
            return true;
        });
        var newMyRooms = state.myRooms.filter(function(myRoom){
            if(myRoom.id === action.roomId){
                return false;
            }
            return true;
        });

        newState = { ...state, rooms: newRooms, myRooms: newMyRooms };
        return newState;
    }
    if (action.type === 'deleteMyRoom') {
        var currentMaxId = state.rooms.length;
        var newId = currentMaxId + 1;
        var newRooms = [...state.rooms, { id: newId, writer: action.writer, dep: action.dep, dest: action.dest, desc: action.desc }];
        newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId };
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());