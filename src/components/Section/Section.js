import React from 'react';
import './Section.scss';


export default function Section( props ){
    const {title, cls} = props.data;

    return(
        <section className={'section__'+cls}>
            {props.children}
            {title.display && <div className="section__title font_themed">{title.text}</div>}
        </section>
    )
}
