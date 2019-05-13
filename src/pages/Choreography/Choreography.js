import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import './Choreography.scss';
import Page from './../../components/Page/Page';

const topContent = {
    title:'Choreography Projects',
    subtitle:'International Freelancer',
    video:{
        path:'video_choreography.mp4',
        sound:true
    },
    content: (<div className="btn"><NavHashLink to="/press#contact">Enquire Now!</NavHashLink></div>),
}
export default function Choreography (){

    return(
        <div className="Choreography">
            <Page data = {topContent}>
                <section>

                </section>
            </Page>
        </div>
    )
}
