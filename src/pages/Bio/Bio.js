import React from 'react';
import './Bio.scss';
import Page from './../../components/Page/Page';
import About from './About/About';
import Endorsements from './Endorsements/Endorsements';

const bioTop={
    title:'Get To Know Murray',
    subtitle:'Background & Endorsements',
    content:null
}
export default function Bio (){
    return(
        <div className="Bio">
            <Page data = {bioTop}>
                <About/>
                <Endorsements/>
            </Page>
        </div>
    )
}
