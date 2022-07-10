import React from 'react';

function ArticleLink({article}) {
    console.log(article.id)

    return (
        <div className="article-list">
            <ul>
                <li>{article.title}</li>
            </ul>
        </div>
    )
}

export default ArticleLink