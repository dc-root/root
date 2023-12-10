
const redux = require('redux');
const createStore = redux.createStore;

const CHANGE_USER = 'change_user'; 
const LOGOUT = 'logout';

// Actions
function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: "Change the current user",
        payload: user
    }
}

function logout() {
    return {
        type: LOGOUT,
        info: "Logout the current user",
    }
}

const initialState = {
    user: '',
    isLogged: false,
    count: 0
}

// Reducers
function userReducer(prevState=initialState, action) {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true,
                count: prevState.count + 1
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}

// Store
const store = createStore(userReducer);

console.log("Initial state", store.getState());

store.dispatch(changeUser("dcdevs"));
store.dispatch(changeUser("dc-root"));

console.log("New State", store.getState());