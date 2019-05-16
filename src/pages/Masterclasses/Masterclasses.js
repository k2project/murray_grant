import React, {useEffect} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import './Masterclasses.scss';
import Page from './../../components/Page/Page';
import Map from './Map/Map';
import PreviousClasses from './PreviousClasses/PreviousClasses';



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
