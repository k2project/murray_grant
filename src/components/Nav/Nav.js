import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Nav.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';
export default function Page (props){
    useEffect(()=>{
        const hash = window.location.hash.slice(1,);
        const pathname = window.location.pathname.slice(1,);
        const links = document.querySelectorAll('.Nav__pages a');
        links.forEach(link=>{
            link.classList.remove('selected');
            if(hash){
                if(link.textContent.toLowerCase().trim() === hash){
                    link.classList.add('selected');
                }
            }else{
                if(link.textContent.toLowerCase().trim() === pathname){
                    link.classList.add('selected');
                }
            }
        })
    
    })
    return(
        <div className="Nav">
            <section>
                <div className="Nav__brand">
                    <h1 className="font_themed">Murray Grant</h1>
                    {/* <span>Creative Enterpreneur</span> */}

                </div>
                <div className="Nav__pages">
                    <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                    <NavLink to="/biography" activeClassName="selected">Biography</NavLink>
                    <NavHashLink to="/biography#endorsements" activeClassName="selected">Endorsements</NavHashLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavHashLink to="/press#contact" activeClassName="selected">Contact</NavHashLink>
                </div>
            </section>
        </div>
    )
}
