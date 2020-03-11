import {createStore} from 'redux';
var initstate = {
    mode : 'read'
}

function reducer(state=initstate, action){
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());