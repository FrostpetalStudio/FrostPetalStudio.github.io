import React, { useState } from 'react';
import Layout,{FixedBanner} from '../../Components/Layout/Layout';
import Note from '../../Components/Note';
import {Link} from 'react-router-dom'

var fontFamily = {
    fontFamily: "Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif"
}

function VeneficiumLayout()
{
    return(
        <React.Fragment>
            <FixedBanner /> hoi
        </React.Fragment>
    )
}

export default function Veneficium() {return(VeneficiumLayout())}   