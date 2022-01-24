import {  FETCH_USERS_ADMIN } from "./actionTypes";

const initState = { adminDetails: [], loading: false };
function adminReducer(state = initState, action) {
    switch ( action.type ) {
        case  FETCH_USERS_ADMIN:
            return {...state, adminDetails: action.payload};
    }
    return state;
}

export default adminReducer;