import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Article({article}) {

    const [currentArticle, setCurrentArticle] = useState('') // NOT WORKING
    const navigate = useNavigate();

    const deleteArticle = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => navigate("/sources"))
    }
    
    const Article = (e) => {
        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
    }

    const updateArticle = (e) => {
        console.log(e.target)
        navigate("/articles/updateForm", {article: article});
    }


    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            <span className="labelStyle">Title: </span> {article.title} <p />
            <span className="labelStyle">Author: </span> {article.author} <p />
            <span className="labelStyle">Description: </span> {article.description}  <p />
            <button type="button" onClick={updateArticle}>Update</button>
            <button type="button" onClick={deleteArticle}>Delete</button>
        </div>
    )
}

export default Article