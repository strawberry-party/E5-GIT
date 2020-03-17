import { createStore } from 'redux';

var rawInitState = {
    userId: "1000",
    mode: 'home',
    rooms: [
        { id: 1, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음', userId: "1000" },
    ],
    maxId: 1,
    notices: [
        { id: 1, title: '중요공지', desc: '카택전 v0.1 런칭' }
    ]
};

var myRooms = [];
myRooms = rawInitState.rooms.filter(function (room) {
    if (room.userId === rawInitState.userId) {
        console.log("yes!");
        return true;
    }
    return false;
});

var initstate = {...rawInitState, myRooms};

function reducer(state = initstate, action) {
    var newState, newMyRooms;
    if (action.type === 'create_process') {
        var room = {id: newId, writer: action.writer, dep: action.dep, dest: action.dest, desc: action.desc, userId: action.userId};
        var currentMaxId = state.rooms.length;
        var newId = currentMaxId + 1;
        var newRooms = [...state.rooms, room];
        var newMyRooms = [...state.myRooms, room ]
        newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId, myRooms:newMyRooms };
        return newState;
    }

    if (action.type === 'join') {
        var room = state.rooms[action.roomId - 1];
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
        });

        var newMyRooms = state.myRooms.filter(function (myRoom) {
            if (myRoom.id === action.roomId) {
                return false;
            }
            return true;
        });

        newState = { ...state, rooms: newRooms, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'quit') {
        var newMyRooms = [];
        for(var i=0;i<state.myRooms.length;i++){
            var currentRoom = state.myRooms[i];
            var currentRoomId = currentRoom.id;
            if(currentRoomId !== action.roomId){
                newMyRooms.append(currentRoom);
            }
        }
        newState = { ...state, myRooms: newMyRooms };
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
