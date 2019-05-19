import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Top.scss';

import facebook from './../../../media/icons/facebook.png';
import twitter from './../../../media/icons/twitter.png';
import instagram from './../../../media/icons/instagram.png';
import linkedin from './../../../media/icons/linkedin.png';
import mg from './../../../media/logos/mg.png';
export default function Top (){

    return(
        <section className="Top">
            <div className="cover">
                <div className="animContainer">
                    <div className="animBox">
                        {/* <img src={mg} alt="Murray Grant"/> */}
                        <h1 className="font_themed">Murray Grant</h1>
                        <h2 className="color_themed">Creative Enterpreneur</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
