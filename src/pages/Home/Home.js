import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Home.scss';

import Footer from './../../components/Footer/Footer';
import SocialMedia from './../../components/SocialMedia';

import Top from './Top/Top';
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Clients from './Clients/Clients';




export default function Home (){
    useEffect(createSessionStorageForInitAnim);
    return(
        <div className="Home">
            <div className="Home__nav">
                <div className="Home__nav_media">
                    <SocialMedia/>
                </div>
                <div className="Home__nav_pages">
                    <NavLink to="/biography" activeClassName="selected">Biography</NavLink>
                    <NavHashLink to="/biography#endorsements" activeClassName="selected">Endorsements</NavHashLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavHashLink to="/press#contact" activeClassName="selected">Contact</NavHashLink>
                </div>
            </div>
            <Top/>
            <CurrentProjects />
            <div className="Home__hidden">
                <PastProjects/>
                <Clients/>
            </div>

            <Footer/>
        </div>
    )
}

function createSessionStorageForInitAnim(){
    const initAnim = sessionStorage.getItem('initAnim');
    const pastProjectsShown = sessionStorage.getItem('pastProjectsShown');
    if(initAnim){
        document.querySelector('.Home').classList.add('not_anim');
    }else{
        sessionStorage.setItem('initAnim', 'true');
    }
    if(pastProjectsShown){
        document.querySelector('.Home').classList.add('pastProjects_shown');
    }
}
