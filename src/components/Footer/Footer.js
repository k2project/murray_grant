import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
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
                    <NavHashLink to="/biography#endorsements" activeClassName="selected">Endorsements</NavHashLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavHashLink to="/press#contact" activeClassName="selected">Contact</NavHashLink>
                </div>
             </div>
        </footer>
    )
}
