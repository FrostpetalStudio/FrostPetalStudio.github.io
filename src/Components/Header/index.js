import {Link} from "react-router-dom";

export default function Header()
{
    return(
        <div className="row justify-content-center" style={{color: "#40677E", paddingTop: "20px"}}>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/"><h3>Home</h3></Link>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/veneficium"><h3>Veneficium</h3></Link>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/aboutus"><h3>About us</h3></Link>
            </div>
        </div>
    );
}