import React from 'react';

import Pyramid from '../components/Pyramid.jpg';

const landingPage = {
    image:{
     paddingTop: -10,
     marginTop: -25,
     width: '100%'
    },
}

export default function LandingPage() {

    return (

    <div>
            <img src={Pyramid} style={landingPage.image} className="card-img-top" alt="..." />
    </div>     

    )};