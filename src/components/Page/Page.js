import React from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

export default function Page(props){
    const {data} = props;
    const topBg = props.bg?  {backgroundImage:"url("+require('./../../media/imgs/'+props.bg)+")"} : null;
    return(
        <div className="Page">
            <Nav/>
            <div className="Page__top" style={topBg}>
                <div className="cover">
                    <section>
                        {data.title && <p className="Page__top_title font_themed">{data.title}</p>}
                        {data.subtitle && <p className="Page__top_subtitle font_themed">{data.subtitle}</p>}
                        {data.content}
                    </section>
                </div>
            </div>
            {props.children}
            <Footer/>
        </div>
    )
}
