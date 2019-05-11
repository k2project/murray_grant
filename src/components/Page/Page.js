import React from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

export default function Page(props){
    const {data} = props;

    return(
        <div className="Page">
            <Nav/>
            <div className="Page__top">
                    <section>
                        { data.video && <video loop autoPlay>
                             <source src={require('./../../media/videos/'+data.video)} type="video/mp4" />
                        </video>}

                        <div className="cover">
                            {data.title && <p className="Page__top_title font_themed">{data.title}</p>}
                            {data.subtitle && <p className="Page__top_subtitle font_themed">{data.subtitle}</p>}
                            {data.content}
                        </div>
                    </section>
            </div>
            {props.children}
            <Footer/>
        </div>
    )
}
