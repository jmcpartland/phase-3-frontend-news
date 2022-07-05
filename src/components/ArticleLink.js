import React from 'react';
import { Link } from 'react-router-dom';

function ArticleLink({article}) {
    console.log(article.id)

    return (
        <div className="article-list">
            <p>{article.title}</p>
        </div>
    )
}

export default ArticleLink