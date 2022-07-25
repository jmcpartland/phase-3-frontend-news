import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleForm = ({ createArticle, source })  => {
    const articleUrl = 'http://localhost:9292/articles';
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        source_id: source.id
    });

    const handleChange = (e) => {
        const name = e.target.name
        setFormData({
            ...formData,
            [name]: e.target.value, source_id: source.id
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)

        fetch(articleUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setFormData({
            title: "",
            description: "",
            author: "",
            source_id: ""
        }))
        .then(() => createArticle())
    }


    return (
        <div className="center">
            <h3>New Article Form</h3>

            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title} 
                        onChange={handleChange} 
                    />
                <p />
                    <label>Description: </label>
                <br />
                    <textarea 
                        rows = "5" 
                        cols = "50"
                        type="text"
                        name="description"
                        value={formData.description} 
                        onChange={handleChange} 
                    />
                <p />
                <label>Author: </label>
                    <input 
                        type="text"
                        name="author"
                        value={formData.author} 
                        onChange={handleChange}
                     />
                <p />
                <label>Source: <b>{source.name}</b> </label>

                <p />                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ArticleForm