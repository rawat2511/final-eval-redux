import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function AllRoutes(){
    return (
        <Switch>
            <Route exact path="/"><h1>Home</h1></Route>
            <Route exact path="/about"><h1>About</h1></Route>
            <Route exact path="/contact"><h1>Contact</h1></Route>
        </Switch>
    )
}

export default AllRoutes;