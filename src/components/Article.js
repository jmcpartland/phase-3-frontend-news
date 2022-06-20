import React from 'react';

function Article({article}) {
    return (
        <div className="center">
            <hr />
            <img src={article.url_to_image} /><p />
            <span className="labelStyle">Title: </span> {article.title}
            <p />
            <span className="labelStyle">Author: </span> {article.author}
        </div>
    )
}

export default Article