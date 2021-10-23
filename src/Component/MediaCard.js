import React from 'react'

export default function MediaCard({imageUrl,title,body}) {
    return (
        <div>
            <img src={imageUrl} alt="card" width="200px" height="200px" />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}