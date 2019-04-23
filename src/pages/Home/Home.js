import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';

import Section from './../../components/Section/Section';
import Footer from './../../components/Footer/Footer';

import Top from './Top/Top';
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Clients from './Clients/Clients';

import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';

const homeSections = {
    top:{
        title:{
            text:null,
            display:false
        },
        cls:'top'
    },
    currentProjects:{
        title:{
            text:'Current Projects',
            display:false
        },
        cls:'currentProjects'
    },
    pastProjects:{
        title:{
            text:'Past Projects',
            display:true
        },
        cls:'pastProjects'
    },
    clients:{
        title:{
            text:'Clients',
            display:true
        },
        cls:'clients'
    },
}
export default function Home (){

    return(
        <div className="Home">
            <div className="Home__nav">
                <div className="Home__nav_media">
                    <a href="#" target="_blank"  rel="noopener noreferrer">
                        <img src={linkedin} alt="Linked In"/>
                    </a>
                    <a href="#" target="_blank"  rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="#" target="_blank"  rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter"/>
                    </a>
                    <a href="#" target="_blank"  rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                </div>
                <div className="Home__nav_pages">
                    <NavLink to="/biography" activeClassName="selected">Biography</NavLink>
                    <NavLink to="/biography" activeClassName="selected">Endorsements</NavLink>
                    <NavLink to="/press" activeClassName="selected">Press</NavLink>
                    <NavLink to="/" activeClassName="selected">Contact</NavLink>
                </div>
            </div>
            <Section data={homeSections.top}>
                <Top/>
            </Section>

            <Section data={homeSections.currentProjects}>
                <CurrentProjects/>
            </Section>
            <div className="Home__hidden">
                <Section data={homeSections.pastProjects}>
                    <PastProjects/>
                </Section>
                <Section data={homeSections.clients}>
                    <Clients/>
                </Section>

            </div>

            <Footer/>
        </div>
    )
}
