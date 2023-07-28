import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>

            <Card onClick={props.DishSelect}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: "0.5" }}
                    />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;