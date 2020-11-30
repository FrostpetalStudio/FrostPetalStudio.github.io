import Image from "../../Assets/Images/Curve.png";
import Logo from "../../Assets/Images/Logo.png";
import Snowfall from 'react-snowfall'

export default function Home()
{
    return(
        <div>
            <div style={{width: "100%", height: "700px", background: "radial-gradient(#ffffff 50%, #d1d3ed )", position: "relative"}}>
                <Snowfall/>
                <div className="container">
                    <div className="row justify-content-center">
                        <img src={Logo} style={{marginTop: "130px"}}/>
                    </div>
                </div>
                <img src={Image} style={{position: "absolute", width: "100%", bottom: -5}}/>
            </div>
            <div style={{width: "100%", height: "1000px", backgroundColor: "#2c2f33", position: "relative"}}/>
        </div>
        
    );
}