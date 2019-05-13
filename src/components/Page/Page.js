import React, {useState, useEffect} from 'react';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import loader from './../../media/icons/loader.png';
import soundIsOff from './../../media/icons/soundIsOff.png';
import soundIsOn from './../../media/icons/soundIsOn.png';

export default function Page(props){
    useEffect(()=>{
        if(!window.location.hash){
            window.scrollTo(0,0);
        }
    });
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
    const {path, sound} = props.video;

    const [soundOn, setSound] = useState(true);
    const [videoLoading, setVideoLoading] = useState(true);

    function toggleSound(){
        const vid = document.getElementById("page-video");
        if(soundOn){
            setSound(false);
            vid.muted = true;
        }
        if(!soundOn){
            setSound(true);
            vid.muted = false;
        }
    }
    useEffect(()=>{
        const vid = document.getElementById("page-video");

        vid.onloadeddata = function() {
            setVideoLoading(false);
            vid.classList.add('show');
            vid.muted = false;
        };
        //for video with sound
        //mute sound when video out of viewport
        if(sound){
            document.addEventListener('scroll', muteVideoOnScroll)
            document.addEventListener('load', muteVideoOnScroll)
            document.addEventListener('resize', muteVideoOnScroll)
        }
        return ()=>{
            document.removeEventListener('scroll', muteVideoOnScroll)
            document.removeEventListener('load', muteVideoOnScroll)
            document.removeEventListener('resize', muteVideoOnScroll)
        }
    })
    return(
        <div className="Video">
            {videoLoading && <img src={loader} alt="loader" className="loader"/>}
            <video loop autoPlay id="page-video">
                 <source src={require('./../../media/videos/'+path)} type="video/mp4" />
            </video>
            {sound && <div className="video_ctrl_sound" onClick={toggleSound}>
                {soundOn && <img src={soundIsOn} alt="sound on"/>}
                {!soundOn && <img src={soundIsOff} alt="sound off"/>}
            </div>}
        </div>
    )
}

function muteVideoOnScroll(){
    const vid = document.getElementById("page-video");
    const pageTop = document.querySelector('.Page__top');
    const vidBottom = pageTop.getBoundingClientRect().bottom;
    console.log(vidBottom)
    if(vidBottom < -50){
        vid.pause();
    }else{
        vid.play();
    }

}
