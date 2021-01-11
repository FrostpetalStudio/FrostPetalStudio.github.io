import Snowfall from 'react-snowfall'
import Header from "../Header/index.js";
import React, { useState } from 'react';
import RadialEdge from "../RadialEdge";

export default function Layout(children)
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
        <div style={{backgroundColor: "#46474D", width: "100%", overflow: "hidden", fontFamily: "Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif"}}>

            {isFixed ?
                <div style={{position: "fixed", width: "100%", zIndex: "100"}}>
                    {RadialEdge(1150, 1050, <FixedBanner/>, "#46474D", true)}
                </div>
                : null
            }
            {RadialEdge(1150, 575, <FancyBanner/>, "#46474D", false)}
            <div style={{width: "100%", position: "absolute", zIndex: "99", color: "white"}}>
                {children}
            </div>
        </div>
    );
}

export function StandardLayout(children)
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
        <div style={{backgroundColor: "#46474D", width: "100%", overflow: "hidden", fontFamily: "Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif"}}>
            <div style={{position: "fixed", width: "100%", zIndex: "100"}}>
                {RadialEdge(1150, 1050, <FixedBanner/>, "#46474D", true)}
            </div>
            <div style={{width: "100%", position: "absolute", zIndex: "99", color: "white"}}>
                {children}
            </div>
        </div>
    );
}

function FancyBanner() {
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