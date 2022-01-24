import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import fetchUsers from "../../Redux/UsersReducer/action";
import { Link } from 'react-router-dom';


function Users() {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

 
    useEffect(() => {
        const userData = async () => {
            const action = await fetchUsers();
            dispatch(action);
        }
        userData();
    }, [])
 

    console.log("Users", users);
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((user) => <Link key={user.id} to={`/dashboard/user/${user.id}`}><Button style={{margin: "20px"}} variant="contained" color="primary" >{user.name}</Button></Link>)
            }
        </div>
    )
}

export default Users;