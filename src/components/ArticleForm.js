import React, { useState } from 'react';

function ArticleForm({article}) {
    const articleUrl = 'http://localhost:9292/articles';

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        source_id: 0
    });

    const handleChange = (e) => {
        const name = e.target.name
        setFormData({
            ...formData,
            [name]: e.target.value
        });
        // console.log(event)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)

        fetch(articleUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          setFormData({formData});
        });
    }


    return (
        <div className="center">
            <h1>New Article Form</h1>

            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title} 
                        onChange={handleChange} 
                    />
                <p />
                    <label>Description: </label>
                <br />
                    <textarea 
                        rows = "5" 
                        cols = "50"
                        type="text"
                        name="description"
                        value={formData.description} 
                        onChange={handleChange} 
                    />
                <p />
                <label>Author: </label>
                    <input 
                        type="text"
                        name="author"
                        value={formData.author} 
                        onChange={handleChange}
                     />
                <p />
                <label>Source: </label>
                    <input 
                        type="number"
                        name="source_id"
                        value={formData.source_id} 
                        onChange={handleChange}
                     />
                <p />                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ArticleForm