import React from 'react';
import './AboutCard.css'
function AboutCard({image, about}) {
    return <div className='aboutCard'>
        <img src={image}
            alt=""/>
        <p>{about}</p>
    </div>;
}

export default AboutCard;
