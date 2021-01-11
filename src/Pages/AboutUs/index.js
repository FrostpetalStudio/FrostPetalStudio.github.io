import React, { useState } from 'react';
import {StandardLayout} from '../../Components/Layout/Layout';

function AboutUsLayout()
{
    return(
        <div>
            <AboutUsTitle/>
            <TheTeam/>
            <Footer/>
        </div>
    )
}

function AboutUsTitle()
{
    return(
        <div>
            aboutus
        </div>
    );
}

function TheTeam()
{
    return(
        <div>
            The team
        </div>
    );
}

function Footer()
{
    return(
        <div>
            Dit is de footer
        </div>
    )
}

export default function AboutUs() {return(StandardLayout(AboutUsLayout()))}   