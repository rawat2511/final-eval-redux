import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function UserData() {
    const {userID} = useParams();
    const data = useSelector(state => state.users.users);
    const UserDetails = ({name, id, claims}) => {
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
                        claims.map(({purpose, date, amount, status}) => 
                        <tr key={purpose}>
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
    
    return (
        <div>
            {
                data.filter(({id}) => {
                    return id === userID
                }).map(({name, id, claims}) => <UserDetails  key={id} name={name} id={id} claims={claims} />)
            }
        </div>
    )
}

export default UserData;