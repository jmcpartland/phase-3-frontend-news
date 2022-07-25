import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Article from './Article';
import ArticleForm from './ArticleForm';

function Source(props) {
    const [source, setSource] = useState({
        articles: []
    });

    const [newArticle, setNewArticle] = useState(false)

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/sources/${params.id}`)
            .then(r => r.json())
            .then(d => {
                // console.log(d)
                setSource(d)
            })
    }, [newArticle])

    let navigate = useNavigate();

    const createArticle = (e) => {
        setNewArticle(true)
    }

    const sourceArticles = source.articles.map((a) => <Article key={a.id} article={a} />)

    return (
        <div className="center">
            <h1>{source.name}</h1>
            <hr />
            <ArticleForm 
                source={source} createArticle={createArticle}
            />
            {sourceArticles}
        </div>
    )
}

export default Source