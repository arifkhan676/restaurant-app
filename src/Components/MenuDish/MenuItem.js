import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ Platter, ClickItem }) => {

    return (
        <div  >
            <Card inverse style={{ padding: 10, margin: 10 }} onClick={() => ClickItem(Platter)} >
                <CardImg
                    alt="Ginger Burger"
                    src={Platter.image}
                    style={{
                        height: 270,
                        opacity: 0.7,
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{ color: "#000" }}>
                        {Platter.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default MenuItem
