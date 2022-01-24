import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import fetchUsersAdmin from "../../Redux/AdminReducer/action";


function AdminPage() {
    const users = useSelector(state => state.admin.adminDetails);
    const dispatch = useDispatch();

 
    useEffect(() => {
        const userData = async () => {
            const action = await fetchUsersAdmin();
            dispatch(action);
        }
        userData();
    }, [])


    const AdminDetails = ({users}) => {
        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Date of Claim/Reimbursement</th>
                        <th>Purpose of claim</th>
                        <th>Amount to be claimed</th>
                        <th>Status</th>
                    </tr>
                    {
                        users.map(({id, name, purpose, date, amount, status}) => 
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{date}</td>
                            <td>{purpose}</td>
                            <td>{amount}</td>
                            <td>{status}</td>
                        </tr>)
                    }
                </table>
            </div>
        )
    }
 

    console.log("Users", users);
    return (
        <div>
            <h1>ADMINE DASHBOARD</h1>
            <AdminDetails data={users} />
        </div>
    )
}

export default AdminPage;