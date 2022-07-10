import React, { useState, useEffect } from 'react';
import SourceLink from './SourceLink';

function Sources() {
    const [sources, setSources] = useState([])

    const [sourceName, setSourceName] = useState({
        name: ""
    });

    const sourceUrl = 'http://localhost:9292/sources'

    function handleChange(e) {
        setSourceName({name: e.target.value})
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(sourceName)
        fetch(sourceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sourceName)
        })
        .then(response => response.json())
        .then(data =>  setSourceName({
            name: ""
        })
        )
    }
    

    useEffect(() => {
        fetch("http://localhost:9292/sources")
        .then((r) => r.json())
        .then((data) => {
            // console.log(data)
            setSources(data)
        })
    }, [])

    const sourcesList = sources.map(s => <SourceLink key={s.id} source={s} />)

    return (
        <div className="center">
            <h1>Sources</h1>
            <form onSubmit={handleSubmit}>
                Create new Source
                <p />
                <label>Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={sourceName.name} 
                        onChange={handleChange}
                    /> 
                <input type="submit" value="Submit" />
            </form>
            <hr />
            {sourcesList}
        </div>
    )
}

export default Sources