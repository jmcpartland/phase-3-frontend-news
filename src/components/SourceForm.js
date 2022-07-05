import React, { useState } from 'react';

function SourceForm() {
    const sourceUrl = 'http://localhost:9292/sources';

    const [sourceName, setSourceName] = useState("");

    const handleChange = (e) => {
        setSourceName(e.target.value);
        console.log(e)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        fetch(sourceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sourceName)
        })
        .then(response => response.json())
        .then(data => {
          setSourceName("")
        });
    }


    return (
        <div className="center">
            <h1>New Source Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={sourceName} 
                        onChange={handleChange} 
                    />
                <p />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SourceForm