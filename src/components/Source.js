import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

function Source(props) {
    const [source, setSource] = useState({
        articles: []
    });

    const [articleFormFlag, setArticleFormFlag] = useState(false)

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/sources/${params.id}`)
            .then(r => r.json())
            .then(d => {
                setSource(d)
            })
    }, [])

    console.log(source)

    const sourceArticles = source.articles.map((a) => a.title)

    return (
        <div className="center">
            <h3>{source.name}</h3>
            <p>{sourceArticles}</p>
        </div>
    )
}

export default Source