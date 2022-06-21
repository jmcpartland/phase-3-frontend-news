import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleForm from './ArticleForm';

function Article({article}) {

    let msec = Date.parse(article.published_at);
    const publishDate = new Date(msec)
    // console.log(publishDate)

    const navigate = useNavigate();

    const newArticle = (e) => {
        // console.log(e)
        navigate("/articles/new")
    }

    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            {/* <span className="publishDate">Published: </span> {publishDate} <p /> */}
            <span className="labelStyle">Title: </span> {article.title} <p />
            <span className="labelStyle">Author: </span> {article.author} <p />
            <span className="labelStyle">Description: </span> {article.description}  <p />
            <button type="button" onClick={newArticle}>New</button>
        </div>
    )
}

export default Article