import React, {useState, useEffect} from 'react';

function Source() {
    const [source, setSource] = useState({
        dogs: []
    });

    return (
        <div className="center">
            <p>Show page for Source</p>
        </div>
    )
}

export default Source