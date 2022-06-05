import React from 'react';

function SourceLink({source}) {
    return (
        <div className="center">
            <p>{source.name}</p>
            <br>{source.articles[0]["author"]}</br>
            <br>{source.articles.title}</br>
            <br>{source.articles.url}</br>
        </div>
    )
}

export default SourceLink