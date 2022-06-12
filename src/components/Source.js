import React, {useState, useEffect} from 'react';

function Source(props) {
    const [source, setSource] = useState({
        articles: []
    });
    console.log(props.matches)

    const [articleFormFlag, setArticleFormFlag] = useState(false)

    // useEffect(() => {
    //     fetch(`http://localhost:9292/sources/${props.match.params.id}`) 
    //         .then(r => r.json())
    //         .then(d => {
    //             console.log(d)
    //         })
    // }, [])

    return (
        <div className="center">
            <p>Show page for Source</p>
        </div>
    )
}

export default Source