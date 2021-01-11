import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home";

export default function Routing()
{
    return(
        <Router>
            <Route path="/">
                <Home/>
            </Route> 
        </Router>
    );
}