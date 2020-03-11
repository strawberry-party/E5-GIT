import {createStore} from 'redux';
var initstate = {
    mode : 'home',
    rooms : [
        {id: 1, writer: '태형', dep : '대전', dest : '우한'}
    ],
    maxId : 1,
    selectedId : 1
}

function reducer(state=initstate, action){
    var newState;
    if (action.type === 'profile') {
        newState = {...state, mode: action.type};
        return newState;
    }
    if (action.type === 'home') {
        newState = {...state, mode: action.type};
        return newState;
    }
    if (action.type === 'create') {
        newState = {...state, mode: action.type};
        return newState;
    }
    if (action.type === 'read') {
        newState = {...state, mode: action.type, selectedId: action.id};
        return newState;
    }
    if (action.type === 'create_process') {
        var newId = state.maxId + 1;
        var newRooms = [...state.rooms, {id: newId, writer: action.writer, dep: action.dep, dest: action.dest}];
        newState = {...state, mode: 'home', rooms: newRooms, maxId: newId};
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());