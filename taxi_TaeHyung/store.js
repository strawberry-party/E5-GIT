import {createStore} from 'redux';

var initState = {
    mode : 'MAIN',
    max_id : 5,
    selected_id : 1,
    rooms : [
        {id: 1, dep: '대전', dest: '서울'},
        {id: 2, dep: '대전', dest: '부산'},
        {id: 3, dep: '대전', dest: '대구'},
        {id: 4, dep: '대전', dest: '화성'},
        {id: 5, dep: '대전', dest: '명왕성'}
    ]
}

function reducer(state=initState, action){
    var newState = null;
    if (action.type === 'MAIN'){
        newState = {...state, mode: action.type};
        return newState;
    } else if (action.type === 'READ'){
        newState = {...state, mode: action.type, selected_id: action.id};
        return newState;
    } else if (action.type === 'CREATE'){
        newState = {...state, mode: action.type}
        return newState;
    } else if (action.type === 'CREATE_PROCESS'){
        var newId = state.max_id + 1;
        var newRooms = [...state.rooms, {id: newId, dep: action.dep, dest: action.dest}]
        newState = {...state, mode: 'MAIN', max_id: newId, rooms: newRooms}
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())