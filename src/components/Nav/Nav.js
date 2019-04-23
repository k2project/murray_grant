import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';
import sqrWhite from './../../media/bgs/sqrWhite.png';

export default function Page (props){
    return(
        <div className="Nav">
            {/* <p>murray@murraygrant.co.uk</p> */}

            <div className="Nav__brand">
                <h1 className="font_themed"> <img src={sqrWhite} alt="logo"/>mGRANT</h1>
            </div>
            <div className="Nav__navbar">

                <ul className="Nav__pages">
                    {/* <NavLink to="/" exact activeClassName="selected">+ Home</NavLink> */}
                    <NavLink to="/biography" activeClassName="selected">+ Biography</NavLink>
                    <NavLink to="/biography" activeClassName="selected">+ Endorsements</NavLink>
                    <NavLink to="/press" activeClassName="selected">+ Press</NavLink>
                    <NavLink to="/" activeClassName="selected">+ Contact</NavLink>
                </ul>
                {/* <ul className="Nav__media">

                <a href="#" target="_blank"  rel="noopener noreferrer">
                <img src={facebook} alt="Facebook"/>
            </a>
            <a href="#" target="_blank"  rel="noopener noreferrer">
            <img src={instagram} alt="Instagram"/>
        </a>
        <a href="#" target="_blank"  rel="noopener noreferrer">
        <img src={twitter} alt="Twitter"/>
    </a>
    <a href="#" target="_blank"  rel="noopener noreferrer">
    <img src={linkedin} alt="Linked In"/>
                </a>
            </ul> */}
        </div>
    </div>
    )
}
