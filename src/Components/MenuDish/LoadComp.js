import React from 'react'

const LoadComp = ({ comments }) => {
    const preView = comments.map((c) => {
        return (<div key={c.id}>
            <h5>{c.author}</h5>
            <p> {c.comment}</p>
            <p> {c.rating} </p>
        </div>)
    })
    return (
        <div>
            {preView}
        </div>
    )
}

export default LoadComp
