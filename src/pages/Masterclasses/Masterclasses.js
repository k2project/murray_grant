import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import './Masterclasses.scss';
import Page from './../../components/Page/Page';

const topContent = {
    title:'Masterclasses',
    subtitle:'Jazz, Musical Theatre & Audition Techniques',
    video:'video_choreography.mp4',
    content: (<div className="btn"><NavHashLink to="/press#contact">Enquire Now!</NavHashLink></div>),
}
export default function Masterclasses (){

    return(
        <div className="Masterclasses">
            <Page data = {topContent}>
                <section>

                </section>
            </Page>
        </div>
    )
}
