import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComp';
import CommentForm from '../Body/CommentForm';
import { baseURL } from '../Redux/baseURL';

const DishDetail = props => {
    return (

        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseURL + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments
                        comments={props.comments}
                        commentIsLoading={props.commentIsLoading}
                    ></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id}
                        addComment={props.addComment}

                    />

                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;