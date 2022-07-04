import React from 'react';
import { Link } from 'react-router-dom';

function ArticleLink({article}) {
    console.log(article.id)

    return (
        <div className="article-list">
            <Link to={`/articles/${article.id}`}>
                <p>{article.title}</p>
            </Link>
        </div>
    )
}

export default ArticleLink