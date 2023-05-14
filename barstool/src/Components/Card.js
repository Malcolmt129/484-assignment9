import React from 'react';
import '../App.css'

export default function Card ({
    title,
    url,
    thumbnail,
    author,
    authorImage,
    numComments
}) {
    return (
        <div class="card">
            <img id="thumbnail" src={thumbnail} alt="thumbnail" />
            <a id="title" href={url}>{title}</a>
            <p id="author">{author}</p>
            <img id="authorImage" src={authorImage} alt='Author Image'/>
            <p id='commentNum'>{numComments}</p>

        </div>
    );

}

