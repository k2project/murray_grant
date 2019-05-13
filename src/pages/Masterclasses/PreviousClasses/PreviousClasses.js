import React from 'react';
import { NavLink } from 'react-router-dom';
import './PreviousClasses.scss';
import {classes} from './../../../api/classes';

export default function PreviousClasses(){

    return(
        <section className="PreviousClasses">
            <div className="section__title">Previous Classes</div>
            <div className="wrapper">
                {classes.map(cl=><img src={require('./../../../media/logos/'+cl.img)} alt={cl.name} key={cl.name}/>)}
            </div>
            <NavLink to="/" className="btn">Murray's Other Projects</NavLink>
        </section>
    )
}
