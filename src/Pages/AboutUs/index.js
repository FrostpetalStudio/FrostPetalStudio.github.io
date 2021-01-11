import Snowfall from 'react-snowfall'
import Header from "../../Components/Header";
import React, { useState } from 'react';
import RadialEdge from "../../Components/RadialEdge";

export default function Home()
{
    const [isFixed, setFixed] = useState(false);
    var previousScroll = 0;

    document.addEventListener('scroll', function(e) {
        if(window.scrollY > 480 && previousScroll < 480){
            setFixed(true);
            previousScroll = window.scrollY;
        } else if(window.scrollY < 480 && previousScroll > 480){
            setFixed(false);
            previousScroll = window.scrollY;
        }
    });

    return(
        <div style={{backgroundColor: "#2c2f33", width: "100%", overflow: "hidden"}}>
            {isFixed ?
                <div style={{position: "fixed", width: "100%", zIndex: "100"}}>
                    {RadialEdge(1150, 1050, <FixedBanner/>, "#2c2f33")}
                </div>
                : null
            }
            {RadialEdge(1150, 575, <Banner/>, "#2c2f33")}
            <div style={{height: "2000px", width: "100%", position: "absolute", backgroundColor: "#2c2f33", zIndex: "99", color: "white"}}>
                <div className="container">
                    Test
                </div>
            </div>
        </div>
        
    );
}

function Banner() {
    return(
        <div>
            <Snowfall/>
            <div className="row justify-content-center" style={{height: "580px", overflow: "hidden"}}>
                <div className="container" style={{paddingTop: "20px", position: "fixed", width: "100%", height: "580px"}}>
                    <Header/>
                    <div className="row justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
function FixedBanner() {
    return(
        <div>
            <Snowfall/>
            <div style={{paddingTop: "490px"}}>
            <Header/>
            </div>
        </div>
    );
}
