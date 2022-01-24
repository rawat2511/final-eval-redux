import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage";
import AdminPage from "../Components/UsersPage/AdminPage";
import UserData from "../Components/UsersPage/UserData";
import Users from "../Components/UsersPage/Users";


function AllRoutes(){
    return (
        <Switch>
            <Route exact path="/"><MainPage /></Route>
            <Route exact path="/dashboard"><MainPage /></Route>
            <Route exact path="/dashboard/user"><Users /> </Route>
            <Route exact path="/dashboard/user/:userID"> <UserData /> </Route>
            <Route exact path="/reimbursement/add"><h1>Reimbursement Add</h1></Route>
            <Route exact path="/dashboard/admin"><AdminPage /> </Route>
        </Switch>
    )
}

export default AllRoutes;