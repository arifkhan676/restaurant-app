import React from 'react'
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComp from './LoadComp';

const DishDetail = (props) => {
    return (

        <div>
            <Card inverse style={{ padding: 10, margin: 10 }}  >
                <CardImg
                    alt="Ginger Burger"
                    src={props.dish.image}
                    style={{
                        height: 200,
                        opacity: 0.7,
                    }}
                    width="100%"
                />

                <CardTitle tag="p" style={{ color: "#000" }}>
                    <CardText>
                        {props.dish.name}
                    </CardText>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <hr />
                    <LoadComp comments={props.comments} />
                </CardTitle>

            </Card>
        </div>
    )
}

export default DishDetail
