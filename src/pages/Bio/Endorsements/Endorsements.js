import React from 'react';
import './Endorsements.scss';

import {endorsements} from './../../../api/endorsements';
import quotes from './../../../media/icons/quotes.png';

export default function Endorsements (){
    const endorsementsList = endorsements.map(endorsement => displayEndorsements(endorsement))
    return(
        <section>
            <div className="section__title">Industry Endorsements</div>
            <div className="Endorsements" id="endorsements">
                <div className="Endorsements__intro">
                    <p className="font_themed">Find out what businesses I've worked with have to say about me...</p>
                    <img src={quotes} alt="quotes"/>
                </div>
                <div className="Endorsements__quotes">
                    {endorsementsList}
                </div>
            </div>
        </section>
    )
}
function displayEndorsements(endorsement){
    const {title, name, text, link} = endorsement;
    return(
        <div className="quote" key={name}>
            <p className="quote__text">{text}</p>
            <div className="quote__name">
                <b>{name}</b> <br/>
                <i><a href={link} target="_blank"  rel="noopener noreferrer"> {title}</a></i>
            </div>
        </div>
    )

}
