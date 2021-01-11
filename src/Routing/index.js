import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Veneficium from "../Pages/Veneficium";
import AboutUs from "../Pages/AboutUs";

export default function Routing()
{
    return(
        <Router>
            <Route exact path="/">
                <Home/>
            </Route> 
            <Route exact path="/veneficium">
                <Veneficium/>
            </Route> 
            <Route exact path="/aboutus">
                <AboutUs />
            </Route>
        </Router>
    );
}