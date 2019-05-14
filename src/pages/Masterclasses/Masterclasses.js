import React, {useEffect} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import './Masterclasses.scss';
import Page from './../../components/Page/Page';
import PreviousClasses from './PreviousClasses/PreviousClasses';
import map from './../../media/imgs/map.png';

const topContent = {
    title:'Masterclasses',
    subtitle:'Jazz, Musical Theatre & Audition Techniques',
    video:{
        path:'video_masterclasses.mp4',
        sound:false
    },
    content: (<div className="btn"><NavHashLink to="/press#contact">Enquire Now!</NavHashLink></div>),
}
export default function Masterclasses (){

    return(
        <div className="Masterclasses">
            <Page data = {topContent}>
                <section className="Masterclasses__info">
                    <div className="section__title">International workshops</div>
                    <p>Over the last 10 years Murray has been offering Jazz, Musical Theatre Dance and Audition Technique workshops across the world. <br/> His masterclass tours have taken him around Spain, Sweden, Ireland, Cyprus, Germany, Austria and the UK.</p>
                    <Map/>
                    <p>Murray’s masterclasses are for full-time students/students 14+ interested in a career in the arts.</p>
                </section>
                <PreviousClasses/>
            </Page>
        </div>
    )
}
const countries=[
    {
        name:'Spain',
        coords:{
            x:'46.5%',
            y:'43%'
        }
    },
    {
        name:'Sweden',
        coords:{
            x:'52%',
            y:'26%'
        }
    },
    {
        name:'Cyprus',
        coords:{
            x:'55.8%',
            y:'46%'
        }
    },
    {
        name:'Ireland',
        coords:{
            x:'45%',
            y:'33.5%'
        }
    },
    {
        name:'Germany',
        coords:{
            x:'50%',
            y:'36%'
        }
    },
    {
        name:'United Kingdom',
        coords:{
            x:'47%',
            y:'34.5%'
        }
    },
    {
        name:'Austria',
        coords:{
            x:'51%',
            y:'38%'
        }
    },
]
const t = 2000;
function Map(){
    useEffect(()=>{
        const location = document.querySelector('.Map__location');
        runShowLoaction(location);
        setInterval(()=>{runShowLoaction(location)},t*countries.length);
    })
    return(
        <div className="Map">
            <img src={map} alt="world map"/>
            <div className="Map__location">
                <div className="Map__circles">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="Map__text">
                    <p></p>
                </div>
            </div>
        </div>
    )
}
function runShowLoaction(location){
    const circles = location.firstElementChild;
    const text = location.querySelector('.Map__text p');
    countries.forEach((country,index,arr)=>{
        function showLoaction(){
            circles.style.display = 'block';
            text.textContent = country.name;
            // text.style.transform = 'scale(1)';
            text.style.left = '0%';
            text.style.opacity = 1;
            text.style.transition = '.4s ease-out';
            location.style.opacity = 1;
            location.style.left = country.coords.x;
            location.style.top = country.coords.y;
        }
        setTimeout(()=>{
            circles.style.display = 'none';
            location.style.opacity = 0;
            // text.style.transform = 'scale(0)';
            text.style.opacity = 0;
            text.style.left = '-5rem';
            text.style.transition = 'none';
        }, index*t-50);
        setTimeout(showLoaction,index*t+100);
    })
}
