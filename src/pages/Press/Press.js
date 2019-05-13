import React, {useEffect} from 'react';
import './Press.scss';
import Page from './../../components/Page/Page';
import Articles from './Articles/Articles';
import Contact from './Contact/Contact';

const topContent = {
    title:'In The News',
    subtitle:'Press release',
    content: null,
}
export default function Press (){

    return(
        <div className="Press">
            <Page data = {topContent}>
                <section>
                    <Articles/>
                </section>
                <section>
                    <Contact/>
                </section>
            </Page>
        </div>
    )
}
