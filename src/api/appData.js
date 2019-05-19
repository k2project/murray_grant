import React from 'react';
import {NavHashLink} from 'react-router-hash-link';


const canonical = 'http://www.murraygrantofficial.com/';
const description = '';
const keywords = 'murray grant, international, choreography, masterclasses, mga, enterpreneur, creative';

const home = {
    meta : {
        title: "Murry Grant | Creative Enterpreneur",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:null,
        subtitle:null,
        content: null,
    },
}
const biography = {
    meta : {
        title: "Murry Grant | Background & Endorsements",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'Get To Know Murray',
        subtitle:'Background & Endorsements',
        content:null
    },
}
const press = {
    meta : {
        title: "Murry Grant | Press & Contact",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'In The News',
        subtitle:'Press release',
        content: null
    },
}
const cookies = {
    meta : {
        title: "Murry Grant | Cookies Policy",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'Cookies Policy',
        subtitle:'Updated on August 1, 2019',
        content: null
    },
}
const masterclasses = {
    meta : {
        title: "Murry Grant | Masterclasses",
        description,
        canonical,
        meta: {
            name: {
                keywords:'murray grant,masterclasses, international masterclasses, jazz, musical theatre, audition techniques'
            }
        }
    },
    topContent : {
        title:'Masterclasses',
        subtitle:'Jazz, Musical Theatre & Audition Techniques',
        video:{
            path:'video_masterclasses.mp4',
            sound:false
        },
        content: (<NavHashLink to="/press#contact"><div className="btn">Enquire Now!</div></NavHashLink>),
    },
}
const choreography = {
    meta : {
        title: "Murry Grant | International Freelance Choreographer",
        description,
        canonical,
        meta: {
            name: {
                keywords:'murray grant, choreography, choreographer, freelance choreographer, international freelancer'
            }
        }
    },
    topContent : {
        title:'Choreography Projects',
        subtitle:'International Freelancer',
        video:{
            path:'video_choreography.mp4',
            sound:true
        },
        content: (<NavHashLink to="/press#contact"><div className="btn">Enquire Now!</div></NavHashLink>),
    },
}
export const appPages = {
    home,
    biography,
    press,
    masterclasses,
    choreography,
    cookies,
}
