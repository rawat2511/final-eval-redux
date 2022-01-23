import { Link } from "react-router-dom";

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/about",
        title: "About"
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