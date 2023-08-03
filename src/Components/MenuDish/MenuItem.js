import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseURL } from '../Redux/baseURL';

const MenuItem = props => {
    return (
        <div>

            <Card onClick={props.DishSelect}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={baseURL + props.dish.image}
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