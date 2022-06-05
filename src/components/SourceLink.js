import React from 'react';
import { Link } from 'react-router-dom';

function SourceLink({source}) {
    return (
        <div className="source-list">
            <Link to={`${source.id}`}>
                <p>{source.name}</p>
            </Link>
        </div>
    )
}

export default SourceLink