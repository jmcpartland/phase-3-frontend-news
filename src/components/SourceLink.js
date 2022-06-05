import React from 'react';

function SourceLink({source}) {
    return (
        <div className="center">
            <p>{source.name}</p>
        </div>
    )
}

export default SourceLink