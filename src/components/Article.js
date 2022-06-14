import React from 'react';

function Article({article}) {
    return (
        <div className="center">
            <span className="labelStyle">Title: </span> {article.title}
            <br />
            <span className="labelStyle">Author: </span> {article.author}
        </div>
    )
}

export default Article