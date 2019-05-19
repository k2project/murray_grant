import React from 'react';
import './Contact.scss';
import SocialMedia from './../../../components/SocialMedia';


export default function Contact (){

    return(

        <div className="Contact" id="contact">
            <div className="section__title">Contact</div>
            <div className="mail">murray@murraygrant.co.uk</div>
            <SocialMedia/>
            <p>Jenny McLean : admin@murraygrant.co.uk  </p>
            <p>Press Enquiries : press@murraygrant.co.uk</p>
        </div>

    )
}
