import React from 'react';
import { Link } from 'react-router-dom';

function SourceLink({source}) {
    // source.articles.map(s => console.log(s))
    // console.log(source.id)

    return (
        <div className="source-list">
            <Link to={`/sources/${source.id}`}>
                <p>{source.name}</p>
            </Link>
        </div>
    )
}

export default SourceLink