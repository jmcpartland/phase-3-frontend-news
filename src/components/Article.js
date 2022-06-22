import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Article({article}) {

    const [currentArticle, setCurrentArticle] = useState(0) // NOT WORKING

    let navigate = useNavigate();

    const newArticle = (e) => {
        // console.log(e)
        navigate("/articles/new", article={article});
    }



    const deleteArticle = (e) => {
        setCurrentArticle(article.id)  // NOT WORKING
        console.log(currentArticle)

        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => setCurrentArticle(0))  // NOT WORKING
        console.log(currentArticle)
    }





    const updateArticle = (e) => {

        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
    }

    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            <span className="labelStyle">Title: </span> {article.title} <p />
            <span className="labelStyle">Author: </span> {article.author} <p />
            <span className="labelStyle">Description: </span> {article.description}  <p />
            <button type="button" onClick={newArticle}>New</button> 
            <button type="button" onClick={updateArticle}>Update</button>
            <button type="button" onClick={deleteArticle}>Delete</button>
        </div>
    )
}

export default Article