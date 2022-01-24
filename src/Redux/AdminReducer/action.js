import axios from "axios";
import { FETCH_USERS_ADMIN } from "./actionTypes";

const fetchUsersAdmin = async () => {
    let users = await axios("http://localhost:8000/admin");
    users = users.data;
    return { type: FETCH_USERS_ADMIN, payload: users };
}

export default fetchUsersAdmin;