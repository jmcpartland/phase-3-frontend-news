import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Article({article}) {

    let navigate = useNavigate();

    const newArticle = (e) => {
        // console.log(e)
        navigate("/articles/new", article={article});
    }

    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            <span className="labelStyle">Title: </span> {article.title} <p />
            <span className="labelStyle">Author: </span> {article.author} <p />
            <span className="labelStyle">Description: </span> {article.description}  <p />
            <button type="button" onClick={newArticle}>New</button>
        </div>
    )
}

export default Article