import React from 'react';
import Loading from '../Body/Loading';

const LoadComments = props => {
    if (props.commentIsLoading) {
        return <Loading />;
    }
    else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p> Rating: {comment.rating}</p>
                    </div>
                );
            })

        );
    }

}

export default LoadComments;