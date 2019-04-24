import React from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

export default function Page(props){
    return(
        <div className="Page">
            <Nav/>
            <div className="Page__top"></div>
            {props.children}
            <Footer/>
        </div>
    )
}
