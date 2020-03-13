import {createStore} from 'redux';
var initstate = {
    mode : 'home',
    rooms : [
        { id: 1, writer: '태형', dep : '대전', dest : '우한'},
        { id: 2, writer: '태형', dep: '대전', dest: '우한' },
        { id: 3, writer: '태형', dep: '대전', dest: '우한' },
        { id: 4, writer: '태형', dep: '대전', dest: '우한' },
        { id: 5, writer: '태형', dep: '대전', dest: '우한' },
        { id: 6, writer: '태형', dep: '대전', dest: '우한' },
    ],
    maxId : 1,
    myRooms : [],
}

function reducer(state=initstate, action){
    var newState;
    if (action.type === 'create_process') {
        var currentMaxId = state.rooms.length;
        var newId = currentMaxId + 1;
        var newRooms = [...state.rooms, {id: newId, writer: action.writer, dep: action.dep, dest: action.dest}];
        newState = {...state, mode: 'home', rooms: newRooms, maxId: newId};
        return newState;
    }
    if (action.type === 'addMyRoom') {
        var room = state.rooms[action.roomId-1];
        var newMyRooms = [...state.myRooms, room];
        newState = {...state, myRooms: newMyRooms};
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());