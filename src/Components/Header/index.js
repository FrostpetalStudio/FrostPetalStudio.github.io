import {Link} from "react-router-dom";

export default function Header()
{
    return(
        <div className="row justify-content-center" style={{color: "#40677E", paddingTop: "20px"}}>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/" style={{ textDecoration: 'none' }}><h3 style={{color: "#40677E", fontWeight: "bold"}}>Home</h3></Link>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/veneficium" style={{ textDecoration: 'none' }}><h3 style={{color: "#40677E", fontWeight: "bold"}}>Veneficium</h3></Link>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <Link to="/aboutus" style={{ textDecoration: 'none' }}><h3 style={{color: "#40677E", fontWeight: "bold"}}>About us</h3></Link>
            </div>
        </div>
    );
}