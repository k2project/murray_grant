import React from 'react';
import './Articles.scss';

import {articles} from './../../../api/articles';


export default function Articles (){

    const articlesList = articles.map(article=>displayArticle(article));
    return(

        <div className="Articles">
            {articlesList}
        </div>

    )
}
function displayArticle(article){
    const{cls, date, author, source, title, subtitle, text, img, link} = article;
    const bg = require('./../../../media/imgs/'+img.path);
    return (
        <article className={cls} key={cls}>
            <div className="article__img" style={{backgroundImage:"url("+bg+")"}}>
                <div className="article__img_caption">{img.caption}</div>
                <div className="cover"></div>
            </div>
            <div className="article__heading">
                <div className="article__top">
                    <div className="article__title font_themed">{title}</div>
                    <p>by <b>{author}</b> — Posted in <b>{source}</b> on <b>{date}</b></p>
                </div>
                <p className="article__subtitle">{subtitle}</p>
                <div className="btn" onClick={e=>displayArticleText(e)}> Read more</div>
                <div className="article__arr">&#8595;</div>
            </div>
            <div className="article__body">
                {text}
                <p className="article__link">
                    <a href={link} target="_blank"  rel="noopener noreferrer">{source}'s original article available here.</a>
                    <br/>
                    <span onClick={e=>closeArticleText(e)}>&#10006; Close</span>
                </p>
            </div>
        </article>
    )

}
function displayArticleText(e){
    e.target.style.display = 'none';
    e.target.closest('article').classList.add('open');
}
function closeArticleText(e){
    const article = e.target.closest('article');
    article.classList.remove('open');
    article.querySelector('.btn').style.display = 'block';
    article.scrollIntoView({block: "center"});
}
