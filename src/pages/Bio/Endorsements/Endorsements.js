import React from 'react';
import './Endorsements.scss';
import quotes from './../../../media/icons/quotes.png';

export default function Endorsements (){
    return(
        <section>
            <div className="Endorsements" id="endorsements">
                <div className="Endorsements__intro">
                    <p className="font_themed">Find out what businesses I've worked with have to say about me...</p>
                    <img src={quotes} alt="quotes"/>
                </div>
                <div className="Endorsements__quotes">
                    <div className="quote">
                        <p className="quote__business"><b>ted</b></p>
                        <p className="quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className="quote">
                        <p className="quote__business"><b>National Museum of Scotland</b></p>
                        <p className="quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="quote">
                        <p className="quote__business"><b>iab</b></p>
                        <p className="quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
