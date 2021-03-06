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

    // let navigate = useNavigate();


    const articlesList = articles.map(a => <ArticleLink key={a.id} article={a} />)

    return (
        <div className="center">
            <h1>Articles</h1>
                {articlesList}
        </div>
    )
}

export default Articles