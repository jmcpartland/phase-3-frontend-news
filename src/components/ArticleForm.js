import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleForm({article}) {
    const [newArticle, setNewArticle] = useState([]);
    const [articleTitle, setArticleTitle] = useState("")

    let params = useParams();
    // console.log(article);


    function handleChange(event) {
        setArticleTitle(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        // console.log(event)
    }


    return (
        <div className="center">
            <h1>ArticleForm</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Article Title: 
                    <input value={articleTitle} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ArticleForm