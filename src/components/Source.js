import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Article from './Article';

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
                console.log(d)
                setSource(d)
            })
    }, [])


    const sourceArticles = source.articles.map((a) => <Article key={a.id} article={a} />)

    return (
        <div className="center">
            <h3>{source.name}</h3>
            {sourceArticles}
        </div>
    )
}

export default Source