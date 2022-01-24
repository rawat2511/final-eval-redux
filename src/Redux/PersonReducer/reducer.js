import { ADMIN, USER } from "./action";

const initState = {
    person : ""
}

function personReducer( state = initState, action) {
    switch( action.type ) {
        case ADMIN:
            return {...state, person: action.payload}
        case USER:
            return {...state, person: action.payload}
        default:
            return state;
    }
}

export default personReducer;