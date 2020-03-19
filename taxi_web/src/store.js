import { createStore } from 'redux';

var rawInitState = {
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
var myRooms = [];
myRooms = rawInitState.rooms.filter(function (room) {
    if (room.userId === rawInitState.userId) {
        console.log("yes!");
        return true;
    }
    return false;
});

var initstate = { ...rawInitState, myRooms };

function reducer(state = initstate, action) {
    var newState, newMyRooms;
    if (action.type === 'create') {
        var currentMaxId = state.rooms.length;
        var newId = currentMaxId + 1;
        var room = { id: newId, writer: action.writer, dep: action.dep, dest: action.dest, desc: action.desc, joinedUsers: [state.userId], maxNum: Number(action.mnum) };
        var newRooms = [...state.rooms, room];
        var newMyRooms = [...state.myRooms, room]
        newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'join') {
        var userId = state.userId;
        var room = state.rooms[action.roomId - 1];
        if (room.joinedUsers.length === room.maxNum) {
            alert("정원이 다 찼습니다.")
            return state;
        }
        for (var i = 0; i < room.joinedUsers.length; i++) {
            var currentUserId = room.joinedUsers[i];
            if (currentUserId === userId) {
                window.alert('이미 참여한 방입니다');
                return state;
            }
        }
        room.joinedUsers.push(userId);
        console.log("joined", room, userId, room.joinedUsers);

        newMyRooms = [...state.myRooms, room];
        newState = { ...state, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'delete') {
        var newRooms = state.rooms.filter(function (room) {
            if (room.id === action.roomId) {
                return false;
            }
            return true;
        })
        newState = { ...state, myRooms: newMyRooms };
        newState.rooms.num = newState.rooms.num - 1
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
