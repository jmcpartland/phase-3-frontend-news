import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
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

    let navigate = useNavigate();

    const newArticle = (e) => {
        // console.log(e)
        navigate("/articles/new");
    }


    const addArticle = (article) => {
        fetch(`http://localhost:9292/articles`, {
            method: "POST",
            body: JSON.stringify({
                title: article.title,
                source_id: params.id
            })
        })
    }

    const sourceArticles = source.articles.map((a) => <Article key={a.id} article={a} />)

    return (
        <div className="center">
            <h1>{source.name}</h1>
            <button type="button" onClick={newArticle}>Create New Article</button> 

            {sourceArticles}
        </div>
    )
}

export default Source