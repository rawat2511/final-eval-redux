import axios from "axios";
import { FETCH_USERS } from "./actionTypes";

const fetchUsers = async () => {
    let users = await axios("http://localhost:8000/users");
    users = users.data;
    return { type: FETCH_USERS, payload: users };
}

export default fetchUsers;