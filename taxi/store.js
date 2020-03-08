import {createStore} from 'redux';

var initState = {
    mode : 'MAIN'
}

function reducer(state=initState, action){
    var newState = null;
    if (action.type === 'READ'){
        newState = {...state, mode: action.type};
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())