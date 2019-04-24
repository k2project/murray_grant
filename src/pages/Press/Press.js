import React from 'react';
import './Press.scss';
import Page from './../../components/Page/Page';

import {articles} from './../../api/articles';
console.log(articles)


export default function Press (){
    const articlesList = articles.map(article=>displayArticle(article));
    return(
        <div className="Press">
            <Page>
                <div className="articles">
                    {articlesList}
                </div>
            </Page>
        </div>
    )
}
function displayArticle(article){
    const{cls, date, author, source, title, subtitle, text, img} = article;
    const bg = require('./../../media/imgs/'+img.path);
    return (
        <article className={cls}>
            <div className="article__img" style={{backgroundImage:"url("+bg+")"}}>
                <div className="article__img_caption">{img.caption}</div>
            </div>
            <div className="article__body">
                <div className="article__top">
                    <div className="article__title font_themed">{title}</div>
                    <p>by <b>{author}</b> — Posted in <b>{source}</b> on <b>{date}</b></p>
                </div>
                <p className="article__subtitle">{subtitle}</p>
                <div className="btn" onClick={e=>displayArticleText(e)}> Read more</div>
            </div>
            {text}
        </article>
    )

}
function displayArticleText(e){
    e.target.style.display = 'none';
    e.target.closest('article').classList.add('open');
}
