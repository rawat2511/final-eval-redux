import { FETCH_USERS, LOAD_USERS } from "./actionTypes";

const initState = { users: [], loading: false };
function usersReducer(state = initState, action) {
    switch ( action.type ) {
        case  FETCH_USERS:
            return {...state, users: action.payload};
    }
    return state;
}

export default usersReducer;