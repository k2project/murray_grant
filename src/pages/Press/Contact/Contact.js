import React from 'react';
import './Contact.scss';
import SocialMedia from './../../../components/SocialMedia';


export default function Contact (){

    return(

        <div className="Contact" id="contact">
            <div className="section__title">Contact</div>
            <p className="mail">murray@murraygrant.co.uk</p>
            <SocialMedia/>
            <p className="downloads">Download approved images for press release here.</p>
        </div>

    )
}
