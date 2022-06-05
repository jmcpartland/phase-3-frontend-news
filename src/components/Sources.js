import React, { useState, useEffect } from 'react';
import SourceLink from './SourceLink';

function Sources() {
    const [sources, setSources] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/sources")
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            setSources(data)
        })
    }, [])

    const sourcesList = sources.map(s => <SourceLink key={s.id} source={s} />)

    return (
        <div className="center">
            <p>Sources</p>
                {sourcesList}
        </div>
    )
}

export default Sources