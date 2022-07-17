import React from 'react';
import head from './images/head.jpeg';

export default function Header(){
    return(
        <div className="header">
            <div className="head"><img src={head} width="120px"/></div>
            <h4>Jai Bhalla</h4>
            <p>Full Stack Developer and Web 3.0 Enthusiast</p>
        </div>
    )
}