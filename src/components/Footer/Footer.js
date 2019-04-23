import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';

export default function Footer(){
    return(
        <footer>
            <div className="cover">
                <div> Murray Grant Official Website &copy;{new Date().getFullYear()}</div>
                <div>
                    <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                    <NavLink to="/biography" activeClassName="selected">Biography</NavLink>
                    <NavLink to="/choreography" activeClassName="selected">Choreography</NavLink>
                    <NavLink to="/masterclasses" activeClassName="selected">Masterclasses</NavLink>
                    <NavLink to="/biography" activeClassName="selected">Endorsements</NavLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavLink to="/" activeClassName="selected">Contact</NavLink>
                </div>
             </div>
        </footer>
    )
}
