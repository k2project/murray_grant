import React, {useState, useEffect} from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import loader from './../../media/icons/loader.png';

export default function Page(props){
    const {data} = props;
    return(
        <div className="Page">
            <Nav/>
            <div className="Page__top">
                    <section>
                        { data.video && <Video video={data.video}/>}
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

function Video (props){
    const {video} = props;
    const [videoLoading, setVideoLoading] = useState(true);
    useEffect(()=>{
        const video = document.getElementById("page-video");
        video.onloadeddata = function() {
            setVideoLoading(false);
            video.classList.add('show');
        };
    })
    return(
        <div className="Video">
            {videoLoading && <img src={loader} alt="loader" className="loader"/>}
            <video loop autoPlay id="page-video">
                 <source src={require('./../../media/videos/'+video)} type="video/mp4" />
            </video>

        </div>
    )
}
