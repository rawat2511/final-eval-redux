import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import adminReducer from "./Redux/AdminReducer/reducer";
import personReducer from "./Redux/PersonReducer/reducer";
import usersReducer from "./Redux/UsersReducer/reducer";

const rootReducer = combineReducers({
    person: personReducer,
    users: usersReducer,
    admin: adminReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;