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
        const links = document.querySelectorAll('.Nav__pages a');
        let path = window.location.href
                    .split('/')
                    .filter(el=>el.length>1) //get rid of ""
                    .pop();
        if(path.includes('#')){
            path = path.split('#')
                    .filter(el=>el.length>1)
                    .pop();
        }
        links.forEach(link=>{
            link.classList.remove('selected');
            if(link.textContent.toLowerCase().trim() === path){
                link.classList.add('selected');
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
