import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Article({ article }) {
    const [isChecked, setIsChecked] = useState(article.read)
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
    
    useEffect(() => {
        fetch(`http://localhost:9292/articles/${article.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "read": isChecked
            })
        })
        .then(response => response.json())

    }, [isChecked])

    const handleChange = (e) => {
        setIsChecked(!isChecked);
    }


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
                checked={isChecked}
                onChange={handleChange}
            />
            <p />
            <button type="button" onClick={deleteArticle}>Delete</button>
        </div>
    )
}

export default Article