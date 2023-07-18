import React from 'react'
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComp from './LoadComp';

const DishDetail = ({ passItem }) => {
    return (

        <div>
            <Card inverse style={{ padding: 10, margin: 10 }}  >
                <CardImg
                    alt="Ginger Burger"
                    src={passItem.image}
                    style={{
                        height: 200,
                        opacity: 0.7,
                    }}
                    width="100%"
                />

                <CardTitle tag="p" style={{ color: "#000" }}>
                    <CardText>
                        {passItem.name}
                    </CardText>
                    <CardText>
                        {passItem.description}
                    </CardText>
                    <hr />
                    <LoadComp comments={passItem.comments} />
                </CardTitle>

            </Card>
        </div>
    )
}

export default DishDetail
