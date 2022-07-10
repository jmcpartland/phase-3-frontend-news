import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import ArticleLink from './ArticleLink';

function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/articles")
        .then((r) => r.json())
        .then((data) => {
            // console.log(data)
            setArticles(data)
        })
    }, [])

    let navigate = useNavigate();

    const newArticle = (e) => {
        // console.log(e)
        navigate("/articles/new");
    }

    const articlesList = articles.map(a => <ArticleLink key={a.id} article={a} />)

    return (
        <div className="center">
            <h1>Articles</h1>
            <button type="button" onClick={newArticle}>Create New Article</button> 
                {articlesList}
        </div>
    )
}

export default Articles