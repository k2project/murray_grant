import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Nav.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';
export default function Page (props){
    return(
        <div className="Nav">
            <section>
                <div className="Nav__brand">
                    <h1 className="font_themed">Murray Grant</h1>
                </div>
                <div className="Nav__pages">
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                    <NavLink to="/biography" activeClassName="selected">Biography</NavLink>
                    <NavHashLink to="/biography#endorsements" activeClassName="selected">Endorsements</NavHashLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavHashLink to="/press#contact" activeClassName="selected">Contact</NavHashLink>
                </div>
            </section>
        </div>
    )
}
