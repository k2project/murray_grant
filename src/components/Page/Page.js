import React, {useState, useEffect} from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import loader from './../../media/icons/loader.png';
import soundIsOff from './../../media/icons/soundIsOff.png';
import soundIsOn from './../../media/icons/soundIsOn.png';

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

    const [soundOn, setSound] = useState(true);
    function toggleSound(){
        const video = document.getElementById("page-video");

        if(soundOn){
            setSound(false);
            video.muted = true;
        }
        if(!soundOn){
            setSound(true);
            video.muted = false;
        }
    }

    const [videoLoading, setVideoLoading] = useState(true);
    useEffect(()=>{
        const video = document.getElementById("page-video");
        video.onloadeddata = function() {
            setVideoLoading(false);
            video.classList.add('show');
            video.muted = false;
        };
    })
    return(
        <div className="Video">
            {videoLoading && <img src={loader} alt="loader" className="loader"/>}
            <video loop autoPlay id="page-video">
                 <source src={require('./../../media/videos/'+video)} type="video/mp4" />
            </video>
            <div className="video_ctrl_sound" onClick={toggleSound}>
                {soundOn && <img src={soundIsOn} alt="sound on"/>}
                {!soundOn && <img src={soundIsOff} alt="sound off"/>}
            </div>
        </div>
    )
}
