import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleForm({article}) {
    const [newArticle, setNewArticle] = useState([]);

    let params = useParams();
    console.log(article);

    return (
        <div className="center">
            <h1>ArticleForm</h1>
        </div>
    )
}

export default ArticleForm