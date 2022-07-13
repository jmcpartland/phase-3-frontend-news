import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Article({ article }) {

    const [checked, setChecked] = useState(false)
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
    
    const handleChange = (e) => {
        setChecked(e.target.value)

        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'read': checked})
        })
        .then(response => response.json())
        .then(data => {
            console.log(checked)
        });

    }

    // function updateArticle(e) {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     navigate("/articles/updateForm", {article: {article}});
    // }


    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            <span className="labelStyle">Title: </span> {article.title} <p />
            <span className="labelStyle">Author: </span> {article.author} <p />
            <span className="labelStyle">Description: </span> {article.description}  <p />


            <span>Read: </span>
            <input 
                type="checkbox" 
                name="read" 
                onChange={handleChange} 
                checked={checked} 
            />
                <p />
           
           
            <button type="button" onClick={deleteArticle}>Delete</button>
        </div>
    )
}

export default Article