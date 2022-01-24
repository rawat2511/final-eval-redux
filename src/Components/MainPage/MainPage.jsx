import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAdmin, setUser } from "../../Redux/PersonReducer/actionTypes";


function MainPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handelUser = () => {
        dispatch(setUser());
        history.push("/dashboard/user")
    }

    const handelAdmin = () => {
        dispatch(setAdmin());
        history.push("/dashboard/admin");
    }
    return (
        <div> 
            <Button variant="contained" color="primary" style={{margin: "20px"}} onClick={handelAdmin} >ADMIN</Button>
            <Button variant="contained" color="primary" onClick={handelUser}>USER</Button>
        </div>
    )
}

export default MainPage;