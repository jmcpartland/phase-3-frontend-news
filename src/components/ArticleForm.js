import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleForm({article}) {
    const [newArticle, setNewArticle] = useState([]);
    const [articleTitle, setArticleTitle] = useState("");
    const [articleDescription, setArticleDescription] = useState("");

    const articleUrl = `http://localhost:9292/articles/${article.id}`;

    let params = useParams();
    // console.log(article);


    function handleChange(event) {
        setArticleTitle(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(articleTitle)

        fetch(articleUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
            })
        })
        .then(response => response.json())
    }


    return (
        <div className="center">
            <h1>ArticleForm</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Article Title: 
                    <input value={articleTitle} onChange={handleChange} />
                </label>
                <label>
                    Article Description: 
                    <input value={articleDescription} onChange={handleChange} />
                </label>               
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ArticleForm