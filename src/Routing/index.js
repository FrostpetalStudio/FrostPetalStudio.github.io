import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/Header";
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