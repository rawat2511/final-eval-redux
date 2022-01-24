import { Link } from "react-router-dom";

const links = [
    {
        to: "/reimbursement/add",
        title: "Apply For Reimbursement"
    },
    {
        to: "/dashboard/user/userID",
        title: "Users"
    },
    {
        to: "/contact",
        title: "Contact"
    }
]
function Navbar(){
    return (
        <>
            {
                links.map(({to, title}) => <Link to={`${to}`}>{title}</Link>)
            }
        </>
    )
}

export default Navbar;